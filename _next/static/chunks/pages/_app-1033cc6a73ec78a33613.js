_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [32],
  {
    "+bxj": function (e, t, n) {},
    "/0+H": function (e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.isInAmpMode = s),
        (t.useAmp = function () {
          return s(c.default.useContext(r.AmpStateContext));
        });
      var a,
        c = (a = n("q1tI")) && a.__esModule ? a : { default: a },
        r = n("lwAK");
      function s() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          a = e.hybrid,
          c = void 0 !== a && a,
          r = e.hasQuery,
          s = void 0 !== r && r;
        return n || (c && s);
      }
    },
    "0Yqi": function (e, t, n) {
      "use strict";
      var a = n("rePB"),
        c = n("nKUr"),
        r = n("zLVn");
      var s = n("20a2"),
        i = n("YFqc"),
        l = n.n(i),
        o = n("q1tI"),
        d = n.n(o);
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      t.a = Object(s.withRouter)(function (e) {
        var t = e.router,
          n = e.children,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              c = Object(r.a)(e, t);
            if (Object.getOwnPropertySymbols) {
              var s = Object.getOwnPropertySymbols(e);
              for (a = 0; a < s.length; a++)
                (n = s[a]),
                  t.indexOf(n) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, n) &&
                      (c[n] = e[n]));
            }
            return c;
          })(e, ["router", "children"]),
          s = o.Children.only(n),
          i = s.props.className || "";
        return (
          t.pathname === a.href &&
            a.activeClassName &&
            (i = "".concat(i, " ").concat(a.activeClassName).trim()),
          delete a.activeClassName,
          Object(c.jsx)(
            l.a,
            j(j({}, a), {}, { children: d.a.cloneElement(s, { className: i }) })
          )
        );
      });
    },
    1: function (e, t, n) {
      n("GcxT"), (e.exports = n("nOHt"));
    },
    "1TCz": function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("o0o1"),
        c = n.n(a),
        r = n("HaE+"),
        s = n("rePB"),
        i = n("nKUr"),
        l = n("k7Sn"),
        o = n.n(l),
        d = n("6y4a"),
        u =
          (n("zsx9"),
          n("+bxj"),
          n("BKXN"),
          n("AzlK"),
          n("XDlY"),
          n("HP2+"),
          n("QYuT"),
          n("QV/D"),
          n("Y9L4"),
          n("Y9py"),
          n("Q0Ar"),
          n("h+no"),
          n("ODXe")),
        j = n("q1tI"),
        h = n.n(j),
        b = n("g4pe"),
        m = n.n(b),
        f = n("tbn6"),
        v = n("5I6T"),
        p = n("20a2"),
        x = n.n(p),
        O = function (e) {
          var t = e.scrollStepInPx,
            n = e.delayInMs,
            a = h.a.useState(!1),
            c = Object(u.a)(a, 2),
            r = c[0],
            s = c[1],
            l = h.a.useRef(null);
          h.a.useEffect(function () {
            document.addEventListener("scroll", function () {
              window.scrollY > 170 ? s(!0) : s(!1);
            });
          }, []);
          var o = function () {
              0 === window.pageYOffset && clearInterval(l.current),
                window.scroll(0, window.pageYOffset - t);
            },
            d = function () {
              l.current = setInterval(o, n);
            };
          return Object(i.jsx)(h.a.Fragment, {
            children: Object(i.jsx)("div", {
              className: "go-top ".concat(r ? "active" : ""),
              onClick: d,
              children: Object(i.jsx)("i", { className: "bx bx-chevron-up" }),
            }),
          });
        },
        g = n("0Yqi"),
        y = n("SMlj");
      function N(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                Object(s.a)(e, t, n[t]);
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
      var C = function () {
          var e = h.a.useState({ search: "" }),
            t = Object(u.a)(e, 2),
            n = t[0],
            a = t[1];
          return Object(i.jsxs)("form", {
            className: "search-box",
            onSubmit: function (e) {
              e.preventDefault(),
                x.a.push({
                  pathname: "/courses/search",
                  query: { q: n.search },
                });
            },
            children: [
              Object(i.jsx)("input", {
                type: "text",
                className: "input-search",
                placeholder: "Search for anything",
                name: "search",
                value: n.search,
                onChange: function (e) {
                  var t = e.target,
                    n = t.name,
                    c = t.value;
                  a(function (e) {
                    return k(k({}, e), {}, Object(s.a)({}, n, c));
                  });
                },
              }),
              Object(i.jsx)("button", {
                type: "submit",
                children: Object(i.jsx)("i", { className: "flaticon-search" }),
              }),
            ],
          });
        },
        w = function (e) {
          var t = e.user,
            n = (Object(p.useRouter)(), h.a.useState(!0)),
            a = Object(u.a)(n, 2),
            c = a[0],
            r = a[1],
            s = function () {
              r(!c);
            };
          h.a.useEffect(function () {
            var e = document.getElementById("navbar");
            document.addEventListener("scroll", function () {
              window.scrollY > 170
                ? e.classList.add("is-sticky")
                : e.classList.remove("is-sticky");
            }),
              window.scrollTo(0, 0);
          });
          var l = t && "admin" === t.role,
            o = t && "teacher" === t.role,
            d = c
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse show",
            j = c
              ? "navbar-toggler navbar-toggler-right collapsed"
              : "navbar-toggler navbar-toggler-right";
          return Object(i.jsx)(h.a.Fragment, {
            children: Object(i.jsx)("div", {
              id: "navbar",
              className: "navbar-area",
              children: Object(i.jsx)("div", {
                className: "edemy-nav",
                children: Object(i.jsx)("div", {
                  className: "container-fluid",
                  children: Object(i.jsxs)("div", {
                    className: "navbar navbar-expand-lg navbar-light",
                    children: [
                      Object(i.jsx)(g.a, {
                        href: "/",
                        children: Object(i.jsx)("a", {
                          onClick: s,
                          className: "navbar-brand",
                          children: Object(i.jsx)("img", {
                            src: "/images/logo.png",
                            alt: "logo",
                          }),
                        }),
                      }),
                      Object(i.jsxs)("button", {
                        onClick: s,
                        className: j,
                        type: "button",
                        "data-toggle": "collapse",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: [
                          Object(i.jsx)("span", {
                            className: "icon-bar top-bar",
                          }),
                          Object(i.jsx)("span", {
                            className: "icon-bar middle-bar",
                          }),
                          Object(i.jsx)("span", {
                            className: "icon-bar bottom-bar",
                          }),
                        ],
                      }),
                      Object(i.jsxs)("div", {
                        className: d,
                        id: "navbarSupportedContent",
                        children: [
                          Object(i.jsx)(C, {}),
                          Object(i.jsxs)("ul", {
                            className: "navbar-nav",
                            children: [
                              Object(i.jsxs)("li", {
                                className: "nav-item",
                                children: [
                                  Object(i.jsx)(g.a, {
                                    href: "/",
                                    activeClassName: "active",
                                    children: Object(i.jsxs)("a", {
                                      onClick: function (e) {
                                        return e.preventDefault();
                                      },
                                      className: "nav-link",
                                      children: [
                                        "Home",
                                        " ",
                                        Object(i.jsx)("i", {
                                          className: "bx bx-chevron-down",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(i.jsxs)("ul", {
                                    className: "dropdown-menu",
                                    children: [
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            className: "nav-link",
                                            children: "Learning Provider",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/elearning",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "eLearning School",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/vendor-certification",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children:
                                              "Vendor Certification Training",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/online-training",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Online Training School",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/distance-learning",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Distance Learning",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/language-school",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Language School",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/modern-schooling",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Modern Schooling",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/yoga-training",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Yoga Training",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/health-coaching",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Health Coaching",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/kindergaten",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Kindergaten",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(i.jsxs)("li", {
                                className: "nav-item",
                                children: [
                                  Object(i.jsx)(g.a, {
                                    href: "/",
                                    children: Object(i.jsxs)("a", {
                                      onClick: function (e) {
                                        return e.preventDefault();
                                      },
                                      className: "nav-link",
                                      children: [
                                        "Pages",
                                        " ",
                                        Object(i.jsx)("i", {
                                          className: "bx bx-chevron-down",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(i.jsxs)("ul", {
                                    className: "dropdown-menu",
                                    children: [
                                      Object(i.jsxs)("li", {
                                        className: "nav-item",
                                        children: [
                                          Object(i.jsx)(g.a, {
                                            href: "/",
                                            children: Object(i.jsxs)("a", {
                                              onClick: function (e) {
                                                return e.preventDefault();
                                              },
                                              className: "nav-link",
                                              children: [
                                                "About Us",
                                                " ",
                                                Object(i.jsx)("i", {
                                                  className:
                                                    "bx bx-chevron-down",
                                                }),
                                              ],
                                            }),
                                          }),
                                          Object(i.jsxs)("ul", {
                                            className: "dropdown-menu",
                                            children: [
                                              Object(i.jsx)("li", {
                                                className: "nav-item",
                                                children: Object(i.jsx)(g.a, {
                                                  href: "/about-1",
                                                  activeClassName: "active",
                                                  children: Object(i.jsx)("a", {
                                                    onClick: s,
                                                    className: "nav-link",
                                                    children: "About Us 01",
                                                  }),
                                                }),
                                              }),
                                              Object(i.jsx)("li", {
                                                className: "nav-item",
                                                children: Object(i.jsx)(g.a, {
                                                  href: "/about-2",
                                                  activeClassName: "active",
                                                  children: Object(i.jsx)("a", {
                                                    onClick: s,
                                                    className: "nav-link",
                                                    children: "About Us 02",
                                                  }),
                                                }),
                                              }),
                                              Object(i.jsx)("li", {
                                                className: "nav-item",
                                                children: Object(i.jsx)(g.a, {
                                                  href: "/about-3",
                                                  activeClassName: "active",
                                                  children: Object(i.jsx)("a", {
                                                    onClick: s,
                                                    className: "nav-link",
                                                    children: "About Us 03",
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      Object(i.jsxs)("li", {
                                        className: "nav-item",
                                        children: [
                                          Object(i.jsx)(g.a, {
                                            href: "/",
                                            children: Object(i.jsxs)("a", {
                                              onClick: function (e) {
                                                return e.preventDefault();
                                              },
                                              className: "nav-link",
                                              children: [
                                                "Events",
                                                " ",
                                                Object(i.jsx)("i", {
                                                  className:
                                                    "bx bx-chevron-down",
                                                }),
                                              ],
                                            }),
                                          }),
                                          Object(i.jsxs)("ul", {
                                            className: "dropdown-menu",
                                            children: [
                                              Object(i.jsx)("li", {
                                                className: "nav-item",
                                                children: Object(i.jsx)(g.a, {
                                                  href: "/events",
                                                  activeClassName: "active",
                                                  children: Object(i.jsx)("a", {
                                                    onClick: s,
                                                    className: "nav-link",
                                                    children: "Events",
                                                  }),
                                                }),
                                              }),
                                              Object(i.jsx)("li", {
                                                className: "nav-item",
                                                children: Object(i.jsx)(g.a, {
                                                  href: "/single-events",
                                                  activeClassName: "active",
                                                  children: Object(i.jsx)("a", {
                                                    onClick: s,
                                                    className: "nav-link",
                                                    children: "Events Details",
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/success-story",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Success Story",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/advisor",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Teacher",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/gallery",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Gallery",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/faq",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "FAQs",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/contact",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Contact Us",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/authentication",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Login/Register",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/404",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "404 Error Page",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/coming-soon",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Coming Soon",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/purchase-guide",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Purchase Guide",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/privacy-policy",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Privacy Policy",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/terms-of-service",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Terms of Service",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(i.jsxs)("li", {
                                className: "nav-item megamenu",
                                children: [
                                  Object(i.jsx)(g.a, {
                                    href: "/",
                                    children: Object(i.jsxs)("a", {
                                      onClick: function (e) {
                                        return e.preventDefault();
                                      },
                                      className: "nav-link",
                                      children: [
                                        "Courses",
                                        " ",
                                        Object(i.jsx)("i", {
                                          className: "bx bx-chevron-down",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(i.jsx)("ul", {
                                    className: "dropdown-menu",
                                    children: Object(i.jsx)("li", {
                                      className: "nav-item",
                                      children: Object(i.jsxs)("div", {
                                        className: "container",
                                        children: [
                                          Object(i.jsxs)("div", {
                                            className: "row",
                                            children: [
                                              Object(i.jsx)("div", {
                                                className: "col",
                                                children: Object(i.jsxs)("ul", {
                                                  className: "megamenu-submenu",
                                                  children: [
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/courses-1",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Courses Grid 01",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/courses-2",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Courses Grid 02",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/courses-3",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Courses Grid 03",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/courses-4",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Courses Grid 04",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/courses-5",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Courses List 01",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/courses-6",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Courses Right Sidebar",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              Object(i.jsx)("div", {
                                                className: "col",
                                                children: Object(i.jsxs)("ul", {
                                                  className: "megamenu-submenu",
                                                  children: [
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/single-courses-1",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Single Layout 01",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/single-courses-2",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Single Layout 02",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/categories",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Courses Categories",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/membership-levels",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Membership Levels",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/become-a-teacher",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Become a Teacher",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/profile",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children: "Profile",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              Object(i.jsx)("div", {
                                                className: "col",
                                                children: Object(i.jsxs)("ul", {
                                                  className: "megamenu-submenu",
                                                  children: [
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/courses-1",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Courses Grid 01",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/courses-2",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Courses Grid 02",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/courses-3",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Courses Grid 03",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/courses-4",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Courses Grid 04",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/courses-5",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Courses List 01",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/courses-6",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Courses Right Sidebar",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              Object(i.jsx)("div", {
                                                className: "col",
                                                children: Object(i.jsxs)("ul", {
                                                  className: "megamenu-submenu",
                                                  children: [
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/single-courses-1",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Single Layout 01",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/single-courses-2",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Single Layout 02",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/categories",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Courses Categories",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/membership-levels",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Membership Levels",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/become-a-teacher",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children:
                                                              "Become a Teacher",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                    Object(i.jsx)("li", {
                                                      className: "nav-item",
                                                      children: Object(i.jsx)(
                                                        g.a,
                                                        {
                                                          href: "/profile",
                                                          activeClassName:
                                                            "active",
                                                          children: Object(
                                                            i.jsx
                                                          )("a", {
                                                            onClick: s,
                                                            className:
                                                              "nav-link",
                                                            children: "Profile",
                                                          }),
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            ],
                                          }),
                                          Object(i.jsxs)("div", {
                                            className: "row m-0 mobile-none",
                                            children: [
                                              Object(i.jsx)("div", {
                                                className:
                                                  "col-lg-2 col-sm-4 col-md-4 col-6 p-0",
                                                children: Object(i.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "single-category-widget",
                                                    children: [
                                                      Object(i.jsx)("div", {
                                                        className: "icon",
                                                        children: Object(i.jsx)(
                                                          "i",
                                                          {
                                                            className:
                                                              "bx bx-code-alt",
                                                          }
                                                        ),
                                                      }),
                                                      Object(i.jsx)("h3", {
                                                        children: "Development",
                                                      }),
                                                      Object(i.jsx)("span", {
                                                        className: "sub-title",
                                                        children: "60 Courses",
                                                      }),
                                                      Object(i.jsx)(g.a, {
                                                        href: "/courses-1",
                                                        children: Object(i.jsx)(
                                                          "a",
                                                          {
                                                            className:
                                                              "link-btn",
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }
                                                ),
                                              }),
                                              Object(i.jsx)("div", {
                                                className:
                                                  "col-lg-2 col-sm-4 col-md-4 col-6 p-0",
                                                children: Object(i.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "single-category-widget",
                                                    children: [
                                                      Object(i.jsx)("div", {
                                                        className: "icon",
                                                        children: Object(i.jsx)(
                                                          "i",
                                                          {
                                                            className:
                                                              "bx bx-camera",
                                                          }
                                                        ),
                                                      }),
                                                      Object(i.jsx)("h3", {
                                                        children: "Photography",
                                                      }),
                                                      Object(i.jsx)("span", {
                                                        className: "sub-title",
                                                        children: "21 Courses",
                                                      }),
                                                      Object(i.jsx)(g.a, {
                                                        href: "/courses-2",
                                                        children: Object(i.jsx)(
                                                          "a",
                                                          {
                                                            className:
                                                              "link-btn",
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }
                                                ),
                                              }),
                                              Object(i.jsx)("div", {
                                                className:
                                                  "col-lg-2 col-sm-4 col-md-4 col-6 p-0",
                                                children: Object(i.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "single-category-widget",
                                                    children: [
                                                      Object(i.jsx)("div", {
                                                        className: "icon",
                                                        children: Object(i.jsx)(
                                                          "i",
                                                          {
                                                            className:
                                                              "bx bx-layer",
                                                          }
                                                        ),
                                                      }),
                                                      Object(i.jsx)("h3", {
                                                        children: "Design",
                                                      }),
                                                      Object(i.jsx)("span", {
                                                        className: "sub-title",
                                                        children: "58 Courses",
                                                      }),
                                                      Object(i.jsx)(g.a, {
                                                        href: "/courses-3",
                                                        children: Object(i.jsx)(
                                                          "a",
                                                          {
                                                            className:
                                                              "link-btn",
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }
                                                ),
                                              }),
                                              Object(i.jsx)("div", {
                                                className:
                                                  "col-lg-2 col-sm-4 col-md-4 col-6 p-0",
                                                children: Object(i.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "single-category-widget",
                                                    children: [
                                                      Object(i.jsx)("div", {
                                                        className: "icon",
                                                        children: Object(i.jsx)(
                                                          "i",
                                                          {
                                                            className:
                                                              "bx bxs-flag-checkered",
                                                          }
                                                        ),
                                                      }),
                                                      Object(i.jsx)("h3", {
                                                        children: "Language",
                                                      }),
                                                      Object(i.jsx)("span", {
                                                        className: "sub-title",
                                                        children: "99 Courses",
                                                      }),
                                                      Object(i.jsx)(g.a, {
                                                        href: "/courses-4",
                                                        children: Object(i.jsx)(
                                                          "a",
                                                          {
                                                            className:
                                                              "link-btn",
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }
                                                ),
                                              }),
                                              Object(i.jsx)("div", {
                                                className:
                                                  "col-lg-2 col-sm-4 col-md-4 col-6 p-0",
                                                children: Object(i.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "single-category-widget",
                                                    children: [
                                                      Object(i.jsx)("div", {
                                                        className: "icon",
                                                        children: Object(i.jsx)(
                                                          "i",
                                                          {
                                                            className:
                                                              "bx bx-health",
                                                          }
                                                        ),
                                                      }),
                                                      Object(i.jsx)("h3", {
                                                        children: "Fitness",
                                                      }),
                                                      Object(i.jsx)("span", {
                                                        className: "sub-title",
                                                        children: "21 Courses",
                                                      }),
                                                      Object(i.jsx)(g.a, {
                                                        href: "/courses-5",
                                                        children: Object(i.jsx)(
                                                          "a",
                                                          {
                                                            className:
                                                              "link-btn",
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }
                                                ),
                                              }),
                                              Object(i.jsx)("div", {
                                                className:
                                                  "col-lg-2 col-sm-4 col-md-4 col-6 p-0",
                                                children: Object(i.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "single-category-widget",
                                                    children: [
                                                      Object(i.jsx)("div", {
                                                        className: "icon",
                                                        children: Object(i.jsx)(
                                                          "i",
                                                          {
                                                            className:
                                                              "bx bx-line-chart",
                                                          }
                                                        ),
                                                      }),
                                                      Object(i.jsx)("h3", {
                                                        children: "Business",
                                                      }),
                                                      Object(i.jsx)("span", {
                                                        className: "sub-title",
                                                        children: "49 Courses",
                                                      }),
                                                      Object(i.jsx)(g.a, {
                                                        href: "/courses-6",
                                                        children: Object(i.jsx)(
                                                          "a",
                                                          {
                                                            className:
                                                              "link-btn",
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              Object(i.jsxs)("li", {
                                className: "nav-item",
                                children: [
                                  Object(i.jsx)(g.a, {
                                    href: "/",
                                    children: Object(i.jsxs)("a", {
                                      onClick: function (e) {
                                        return e.preventDefault();
                                      },
                                      className: "nav-link",
                                      children: [
                                        "Shop",
                                        " ",
                                        Object(i.jsx)("i", {
                                          className: "bx bx-chevron-down",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(i.jsxs)("ul", {
                                    className: "dropdown-menu",
                                    children: [
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/products-list-1",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Product List 01",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/products-list-2",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Product List 02",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/cart",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Cart",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/checkout",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Checkout",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/single-products",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Product Details",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(i.jsxs)("li", {
                                className: "nav-item",
                                children: [
                                  Object(i.jsx)(g.a, {
                                    href: "/",
                                    children: Object(i.jsxs)("a", {
                                      onClick: function (e) {
                                        return e.preventDefault();
                                      },
                                      className: "nav-link",
                                      children: [
                                        "Blog",
                                        " ",
                                        Object(i.jsx)("i", {
                                          className: "bx bx-chevron-down",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(i.jsxs)("ul", {
                                    className: "dropdown-menu",
                                    children: [
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/blog-1",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Grid (2 in Row)",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/blog-2",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Grid (3 in Row)",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/blog-3",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Grid (Full Width)",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/blog-4",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Right Sidebar",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsxs)("li", {
                                        className: "nav-item",
                                        children: [
                                          Object(i.jsx)(g.a, {
                                            href: "/",
                                            children: Object(i.jsxs)("a", {
                                              onClick: function (e) {
                                                return e.preventDefault();
                                              },
                                              className: "nav-link",
                                              children: [
                                                "Single Post",
                                                " ",
                                                Object(i.jsx)("i", {
                                                  className:
                                                    "bx bx-chevron-down",
                                                }),
                                              ],
                                            }),
                                          }),
                                          Object(i.jsxs)("ul", {
                                            className: "dropdown-menu",
                                            children: [
                                              Object(i.jsx)("li", {
                                                className: "nav-item",
                                                children: Object(i.jsx)(g.a, {
                                                  href: "/single-blog-1",
                                                  activeClassName: "active",
                                                  children: Object(i.jsx)("a", {
                                                    onClick: s,
                                                    className: "nav-link",
                                                    children: "Default",
                                                  }),
                                                }),
                                              }),
                                              Object(i.jsx)("li", {
                                                className: "nav-item",
                                                children: Object(i.jsx)(g.a, {
                                                  href: "/single-blog-2",
                                                  activeClassName: "active",
                                                  children: Object(i.jsx)("a", {
                                                    onClick: s,
                                                    className: "nav-link",
                                                    children: "With Video",
                                                  }),
                                                }),
                                              }),
                                              Object(i.jsx)("li", {
                                                className: "nav-item",
                                                children: Object(i.jsx)(g.a, {
                                                  href: "/single-blog-3",
                                                  activeClassName: "active",
                                                  children: Object(i.jsx)("a", {
                                                    onClick: s,
                                                    className: "nav-link",
                                                    children:
                                                      "With Image Slider",
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(i.jsx)("li", {
                                className: "nav-item",
                                children: Object(i.jsx)(g.a, {
                                  href: "/become-a-teacher",
                                  children: Object(i.jsx)("a", {
                                    className: "nav-link",
                                    children: "Become A Teacher",
                                  }),
                                }),
                              }),
                              ((t && o) || (t && l)) &&
                                Object(i.jsx)("li", {
                                  className: "nav-item",
                                  children: Object(i.jsx)(g.a, {
                                    href: "/teacher/dashboard",
                                    children: Object(i.jsx)("a", {
                                      className: "nav-link",
                                      children: "Teacher Dashboard",
                                    }),
                                  }),
                                }),
                              t &&
                                l &&
                                Object(i.jsx)("li", {
                                  className: "nav-item",
                                  children: Object(i.jsx)(g.a, {
                                    href: "/admin/dashboard",
                                    children: Object(i.jsx)("a", {
                                      className: "nav-link",
                                      children: "Dashboard",
                                    }),
                                  }),
                                }),
                            ],
                          }),
                          Object(i.jsxs)("div", {
                            className:
                              "others-option d-flex align-items-center",
                            children: [
                              Object(i.jsx)("div", {
                                className: "option-item",
                                children: Object(i.jsx)("div", {
                                  className: "cart-btn",
                                  children: Object(i.jsx)(g.a, {
                                    href: "/cart",
                                    children: Object(i.jsxs)("a", {
                                      children: [
                                        Object(i.jsx)("i", {
                                          className: "flaticon-shopping-cart",
                                        }),
                                        " ",
                                        Object(i.jsx)("span", {
                                          children: "3",
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                              Object(i.jsx)("div", {
                                className: "option-item",
                                children: t
                                  ? Object(i.jsxs)("div", {
                                      className: "user-dropdown",
                                      children: [
                                        Object(i.jsx)(g.a, {
                                          href: "/",
                                          children: Object(i.jsxs)("a", {
                                            onClick: function (e) {
                                              return e.preventDefault();
                                            },
                                            className: "default-btn",
                                            children: [
                                              Object(i.jsx)("i", {
                                                className: "flaticon-user",
                                              }),
                                              " ",
                                              t.name,
                                              " ",
                                              Object(i.jsx)("span", {}),
                                            ],
                                          }),
                                        }),
                                        Object(i.jsxs)("ul", {
                                          className: "dropdown-menu",
                                          children: [
                                            Object(i.jsx)("li", {
                                              className: "nav-item",
                                              children: Object(i.jsx)(g.a, {
                                                href: "/my-courses",
                                                activeClassName: "active",
                                                children: Object(i.jsx)("a", {
                                                  onClick: s,
                                                  className: "nav-link",
                                                  children: "My Courses",
                                                }),
                                              }),
                                            }),
                                            Object(i.jsx)("li", {
                                              className: "nav-item",
                                              children: Object(i.jsx)(g.a, {
                                                href: "/user/my-profile",
                                                activeClassName: "active",
                                                children: Object(i.jsx)("a", {
                                                  onClick: s,
                                                  className: "nav-link",
                                                  children: "My Profile",
                                                }),
                                              }),
                                            }),
                                            Object(i.jsx)("li", {
                                              className: "nav-item",
                                              children: Object(i.jsx)(g.a, {
                                                href: "/user/edit-profile",
                                                activeClassName: "active",
                                                children: Object(i.jsx)("a", {
                                                  onClick: s,
                                                  className: "nav-link",
                                                  children: "Edit Profile",
                                                }),
                                              }),
                                            }),
                                            Object(i.jsx)("li", {
                                              className: "nav-item",
                                              children: Object(i.jsx)(g.a, {
                                                href: "/user/edit-password",
                                                activeClassName: "active",
                                                children: Object(i.jsx)("a", {
                                                  onClick: s,
                                                  className: "nav-link",
                                                  children: "Edit Password",
                                                }),
                                              }),
                                            }),
                                            Object(i.jsx)("li", {
                                              className: "nav-item",
                                              children: Object(i.jsx)(g.a, {
                                                href: "/",
                                                children: Object(i.jsx)("a", {
                                                  className: "nav-link",
                                                  onClick: function (e) {
                                                    e.preventDefault(),
                                                      Object(y.b)();
                                                  },
                                                  children: "Logout",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    })
                                  : Object(i.jsx)(g.a, {
                                      href: "/authentication",
                                      children: Object(i.jsxs)("a", {
                                        className: "default-btn",
                                        children: [
                                          Object(i.jsx)("i", {
                                            className: "flaticon-user",
                                          }),
                                          " ",
                                          "Login/Register ",
                                          Object(i.jsx)("span", {}),
                                        ],
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
              }),
            }),
          });
        },
        S = n("YFqc"),
        _ = n.n(S),
        P = function () {
          var e = new Date().getFullYear();
          return Object(i.jsxs)("footer", {
            className: "footer-area",
            children: [
              Object(i.jsxs)("div", {
                className: "container",
                children: [
                  Object(i.jsxs)("div", {
                    className: "row",
                    children: [
                      Object(i.jsx)("div", {
                        className: "col-lg-4 col-md-6 col-sm-6",
                        children: Object(i.jsxs)("div", {
                          className: "single-footer-widget",
                          children: [
                            Object(i.jsx)(_.a, {
                              href: "/",
                              children: Object(i.jsx)("a", {
                                className: "logo",
                                children: Object(i.jsx)("img", {
                                  src: "/images/logo2.png",
                                  alt: "logo",
                                }),
                              }),
                            }),
                            Object(i.jsx)("p", {
                              children:
                                "Working to bring significant changes in online-based learning by doing extensive research for course curriculum preparation, student engagements, and looking forward to the flexible education!",
                            }),
                            Object(i.jsxs)("ul", {
                              className: "social-link",
                              children: [
                                Object(i.jsx)("li", {
                                  children: Object(i.jsx)("a", {
                                    href: "#",
                                    className: "d-block",
                                    target: "_blank",
                                    children: Object(i.jsx)("i", {
                                      className: "bx bxl-facebook",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("li", {
                                  children: Object(i.jsx)("a", {
                                    href: "#",
                                    className: "d-block",
                                    target: "_blank",
                                    children: Object(i.jsx)("i", {
                                      className: "bx bxl-twitter",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("li", {
                                  children: Object(i.jsx)("a", {
                                    href: "#",
                                    className: "d-block",
                                    target: "_blank",
                                    children: Object(i.jsx)("i", {
                                      className: "bx bxl-instagram",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("li", {
                                  children: Object(i.jsx)("a", {
                                    href: "#",
                                    className: "d-block",
                                    target: "_blank",
                                    children: Object(i.jsx)("i", {
                                      className: "bx bxl-linkedin",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(i.jsx)("div", {
                        className: "col-lg-2 col-md-6 col-sm-6",
                        children: Object(i.jsxs)("div", {
                          className: "single-footer-widget pl-5",
                          children: [
                            Object(i.jsx)("h3", { children: "Explore" }),
                            Object(i.jsxs)("ul", {
                              className: "footer-links-list",
                              children: [
                                Object(i.jsx)("li", {
                                  children: Object(i.jsx)(_.a, {
                                    href: "/",
                                    children: Object(i.jsx)("a", {
                                      children: "Home",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("li", {
                                  children: Object(i.jsx)(_.a, {
                                    href: "/about-1",
                                    children: Object(i.jsx)("a", {
                                      children: "About",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("li", {
                                  children: Object(i.jsx)(_.a, {
                                    href: "/courses-1",
                                    children: Object(i.jsx)("a", {
                                      children: "Courses",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("li", {
                                  children: Object(i.jsx)(_.a, {
                                    href: "/events",
                                    children: Object(i.jsx)("a", {
                                      children: "Events",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("li", {
                                  children: Object(i.jsx)(_.a, {
                                    href: "/contact",
                                    children: Object(i.jsx)("a", {
                                      children: "Contact",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(i.jsx)("div", {
                        className: "col-lg-2 col-md-6 col-sm-6",
                        children: Object(i.jsxs)("div", {
                          className: "single-footer-widget",
                          children: [
                            Object(i.jsx)("h3", { children: "Resources" }),
                            Object(i.jsxs)("ul", {
                              className: "footer-links-list",
                              children: [
                                Object(i.jsx)("li", {
                                  children: Object(i.jsx)(_.a, {
                                    href: "#",
                                    children: Object(i.jsx)("a", {
                                      children: "Student Success",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("li", {
                                  children: Object(i.jsx)(_.a, {
                                    href: "#",
                                    children: Object(i.jsx)("a", {
                                      children: "Scholarships",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("li", {
                                  children: Object(i.jsx)(_.a, {
                                    href: "#",
                                    children: Object(i.jsx)("a", {
                                      children: "For Business",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("li", {
                                  children: Object(i.jsx)(_.a, {
                                    href: "#",
                                    children: Object(i.jsx)("a", {
                                      children: "Go Premium",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("li", {
                                  children: Object(i.jsx)(_.a, {
                                    href: "#",
                                    children: Object(i.jsx)("a", {
                                      children: "Team Plans",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(i.jsx)("div", {
                        className: "col-lg-4 col-md-6 col-sm-6",
                        children: Object(i.jsxs)("div", {
                          className: "single-footer-widget",
                          children: [
                            Object(i.jsx)("h3", { children: "Address" }),
                            Object(i.jsxs)("ul", {
                              className: "footer-contact-info",
                              children: [
                                Object(i.jsxs)("li", {
                                  children: [
                                    Object(i.jsx)("i", {
                                      className: "bx bx-map",
                                    }),
                                    "2750 Quadra Street Golden Victoria Road, New York, USA",
                                  ],
                                }),
                                Object(i.jsxs)("li", {
                                  children: [
                                    Object(i.jsx)("i", {
                                      className: "bx bx-phone-call",
                                    }),
                                    Object(i.jsx)("a", {
                                      href: "tel:+44587154756",
                                      children: "+1 (123) 456 7890",
                                    }),
                                  ],
                                }),
                                Object(i.jsxs)("li", {
                                  children: [
                                    Object(i.jsx)("i", {
                                      className: "bx bx-envelope",
                                    }),
                                    Object(i.jsx)("a", {
                                      href: "mailto:hello@edemy.com",
                                      children: "hello@edemy.com",
                                    }),
                                  ],
                                }),
                                Object(i.jsxs)("li", {
                                  children: [
                                    Object(i.jsx)("i", {
                                      className: "bx bxs-inbox",
                                    }),
                                    Object(i.jsx)("a", {
                                      href: "tel:+557854578964",
                                      children: "+55 785 4578964",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(i.jsx)("div", {
                    className: "footer-bottom-area",
                    children: Object(i.jsxs)("div", {
                      className: "row align-items-center",
                      children: [
                        Object(i.jsx)("div", {
                          className: "col-lg-6 col-md-6",
                          children: Object(i.jsxs)("p", {
                            children: [
                              Object(i.jsx)("i", {
                                className: "bx bx-copyright",
                              }),
                              e,
                              " eDemy is Proudly Powered by ",
                              Object(i.jsx)("a", {
                                target: "_blank",
                                href: "https://envytheme.com/",
                                children: "EnvyTheme",
                              }),
                            ],
                          }),
                        }),
                        Object(i.jsx)("div", {
                          className: "col-lg-6 col-md-6",
                          children: Object(i.jsxs)("ul", {
                            children: [
                              Object(i.jsx)("li", {
                                children: Object(i.jsx)(_.a, {
                                  href: "/privacy-policy",
                                  children: Object(i.jsx)("a", {
                                    children: "Privacy Policy",
                                  }),
                                }),
                              }),
                              Object(i.jsx)("li", {
                                children: Object(i.jsx)(_.a, {
                                  href: "/terms-of-service",
                                  children: Object(i.jsx)("a", {
                                    children: "Terms & Conditions",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              Object(i.jsxs)("div", {
                className: "lines",
                children: [
                  Object(i.jsx)("div", { className: "line" }),
                  Object(i.jsx)("div", { className: "line" }),
                  Object(i.jsx)("div", { className: "line" }),
                ],
              }),
            ],
          });
        },
        E = function (e) {
          var t = e.user,
            n = h.a.useState(!0),
            a = Object(u.a)(n, 2),
            c = a[0],
            r = a[1],
            s = function () {
              r(!c);
            };
          h.a.useEffect(function () {
            var e = document.getElementById("navbar");
            document.addEventListener("scroll", function () {
              window.scrollY > 170
                ? e.classList.add("is-sticky")
                : e.classList.remove("is-sticky");
            }),
              window.scrollTo(0, 0);
          });
          t && t.role, t && t.role;
          var l = c
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse show",
            o = c
              ? "navbar-toggler navbar-toggler-right collapsed"
              : "navbar-toggler navbar-toggler-right";
          return Object(i.jsx)(h.a.Fragment, {
            children: Object(i.jsx)("div", {
              id: "navbar",
              className: "navbar-area",
              children: Object(i.jsx)("div", {
                className: "edemy-nav admin-nav",
                children: Object(i.jsx)("div", {
                  className: "container-fluid",
                  children: Object(i.jsxs)("div", {
                    className: "navbar navbar-expand-lg navbar-light",
                    children: [
                      Object(i.jsx)(g.a, {
                        href: "/",
                        children: Object(i.jsx)("a", {
                          onClick: s,
                          className: "navbar-brand",
                          children: Object(i.jsx)("img", {
                            src: "/images/logo.png",
                            alt: "logo",
                          }),
                        }),
                      }),
                      Object(i.jsxs)("button", {
                        onClick: s,
                        className: o,
                        type: "button",
                        "data-toggle": "collapse",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: [
                          Object(i.jsx)("span", {
                            className: "icon-bar top-bar",
                          }),
                          Object(i.jsx)("span", {
                            className: "icon-bar middle-bar",
                          }),
                          Object(i.jsx)("span", {
                            className: "icon-bar bottom-bar",
                          }),
                        ],
                      }),
                      Object(i.jsxs)("div", {
                        className: l,
                        id: "navbarSupportedContent",
                        children: [
                          Object(i.jsx)(C, {}),
                          Object(i.jsxs)("ul", {
                            className: "navbar-nav",
                            children: [
                              Object(i.jsxs)("li", {
                                className: "nav-item",
                                children: [
                                  Object(i.jsx)(g.a, {
                                    href: "/",
                                    activeClassName: "active",
                                    children: Object(i.jsxs)("a", {
                                      onClick: function (e) {
                                        return e.preventDefault();
                                      },
                                      className: "nav-link",
                                      children: [
                                        "Home ",
                                        Object(i.jsx)("i", {
                                          className: "bx bx-chevron-down",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(i.jsxs)("ul", {
                                    className: "dropdown-menu",
                                    children: [
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "eLearning School",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/index-2",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children:
                                              "Vendor Certification Training",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/index-3",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Online Training School",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/index-4",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Distance Learning",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/index-5",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Language School",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/index-6",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Modern Schooling",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/index-7",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Yoga Training",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/index-8",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Health Coaching",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/index-9",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Kindergaten",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(i.jsx)("li", {
                                className: "nav-item",
                                children: Object(i.jsx)(g.a, {
                                  href: "/courses",
                                  activeClassName: "active",
                                  children: Object(i.jsx)("a", {
                                    onClick: s,
                                    className: "nav-link",
                                    children: "Courses",
                                  }),
                                }),
                              }),
                              Object(i.jsx)("li", {
                                className: "nav-item",
                                children: Object(i.jsx)(g.a, {
                                  href: "/become-a-teacher",
                                  children: Object(i.jsx)("a", {
                                    className: "nav-link",
                                    children: "Become A Teacher",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          Object(i.jsxs)("div", {
                            className:
                              "others-option d-flex align-items-center",
                            children: [
                              Object(i.jsx)("div", {
                                className: "option-item",
                                children: Object(i.jsx)("div", {
                                  className: "cart-btn",
                                  children: Object(i.jsx)(g.a, {
                                    href: "/cart",
                                    children: Object(i.jsxs)("a", {
                                      children: [
                                        Object(i.jsx)("i", {
                                          className: "flaticon-shopping-cart",
                                        }),
                                        " ",
                                        Object(i.jsx)("span", {
                                          children: "3",
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                              Object(i.jsx)("div", {
                                className: "option-item",
                                children: t
                                  ? Object(i.jsxs)("div", {
                                      className: "user-dropdown",
                                      children: [
                                        Object(i.jsx)(g.a, {
                                          href: "/",
                                          children: Object(i.jsxs)("a", {
                                            onClick: function (e) {
                                              return e.preventDefault();
                                            },
                                            className: "default-btn",
                                            children: [
                                              Object(i.jsx)("i", {
                                                className: "flaticon-user",
                                              }),
                                              " ",
                                              t.name,
                                              " ",
                                              Object(i.jsx)("span", {}),
                                            ],
                                          }),
                                        }),
                                        Object(i.jsxs)("ul", {
                                          className: "dropdown-menu",
                                          children: [
                                            Object(i.jsx)("li", {
                                              className: "nav-item",
                                              children: Object(i.jsx)(g.a, {
                                                href: "/my-courses",
                                                activeClassName: "active",
                                                children: Object(i.jsx)("a", {
                                                  onClick: s,
                                                  className: "nav-link",
                                                  children: "My Courses",
                                                }),
                                              }),
                                            }),
                                            Object(i.jsx)("li", {
                                              className: "nav-item",
                                              children: Object(i.jsx)(g.a, {
                                                href: "/user/my-profile",
                                                activeClassName: "active",
                                                children: Object(i.jsx)("a", {
                                                  onClick: s,
                                                  className: "nav-link",
                                                  children: "My Profile",
                                                }),
                                              }),
                                            }),
                                            Object(i.jsx)("li", {
                                              className: "nav-item",
                                              children: Object(i.jsx)(g.a, {
                                                href: "/user/edit-profile",
                                                activeClassName: "active",
                                                children: Object(i.jsx)("a", {
                                                  onClick: s,
                                                  className: "nav-link",
                                                  children: "Edit Profile",
                                                }),
                                              }),
                                            }),
                                            Object(i.jsx)("li", {
                                              className: "nav-item",
                                              children: Object(i.jsx)(g.a, {
                                                href: "/user/edit-password",
                                                activeClassName: "active",
                                                children: Object(i.jsx)("a", {
                                                  onClick: s,
                                                  className: "nav-link",
                                                  children: "Edit Password",
                                                }),
                                              }),
                                            }),
                                            Object(i.jsx)("li", {
                                              className: "nav-item",
                                              children: Object(i.jsx)(g.a, {
                                                href: "/",
                                                children: Object(i.jsx)("a", {
                                                  className: "nav-link",
                                                  onClick: function (e) {
                                                    e.preventDefault(),
                                                      Object(y.b)();
                                                  },
                                                  children: "Logout",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    })
                                  : Object(i.jsx)(g.a, {
                                      href: "/authentication",
                                      children: Object(i.jsxs)("a", {
                                        className: "default-btn",
                                        children: [
                                          Object(i.jsx)("i", {
                                            className: "flaticon-user",
                                          }),
                                          " Login/Register ",
                                          Object(i.jsx)("span", {}),
                                        ],
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
              }),
            }),
          });
        },
        T = function (e) {
          var t = e.user,
            n = h.a.useState(!0),
            a = Object(u.a)(n, 2),
            c = a[0],
            r = a[1],
            s = function () {
              r(!c);
            };
          h.a.useEffect(function () {
            var e = document.getElementById("navbar");
            document.addEventListener("scroll", function () {
              window.scrollY > 170
                ? e.classList.add("is-sticky")
                : e.classList.remove("is-sticky");
            }),
              window.scrollTo(0, 0);
          });
          var l = t && "admin" === t.role,
            o = t && "teacher" === t.role,
            d = c
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse show",
            j = c
              ? "navbar-toggler navbar-toggler-right collapsed"
              : "navbar-toggler navbar-toggler-right";
          return Object(i.jsx)(h.a.Fragment, {
            children: Object(i.jsx)("div", {
              id: "navbar",
              className: "navbar-area",
              children: Object(i.jsx)("div", {
                className: "edemy-nav admin-nav",
                children: Object(i.jsx)("div", {
                  className: "container-fluid",
                  children: Object(i.jsxs)("div", {
                    className: "navbar navbar-expand-lg navbar-light",
                    children: [
                      Object(i.jsx)(g.a, {
                        href: "/",
                        children: Object(i.jsx)("a", {
                          onClick: s,
                          className: "navbar-brand",
                          children: Object(i.jsx)("img", {
                            src: "/images/logo.png",
                            alt: "logo",
                          }),
                        }),
                      }),
                      Object(i.jsxs)("button", {
                        onClick: s,
                        className: j,
                        type: "button",
                        "data-toggle": "collapse",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: [
                          Object(i.jsx)("span", {
                            className: "icon-bar top-bar",
                          }),
                          Object(i.jsx)("span", {
                            className: "icon-bar middle-bar",
                          }),
                          Object(i.jsx)("span", {
                            className: "icon-bar bottom-bar",
                          }),
                        ],
                      }),
                      Object(i.jsxs)("div", {
                        className: d,
                        id: "navbarSupportedContent",
                        children: [
                          Object(i.jsx)(C, {}),
                          Object(i.jsxs)("ul", {
                            className: "navbar-nav",
                            children: [
                              Object(i.jsxs)("li", {
                                className: "nav-item",
                                children: [
                                  Object(i.jsx)(g.a, {
                                    href: "/",
                                    activeClassName: "active",
                                    children: Object(i.jsxs)("a", {
                                      onClick: function (e) {
                                        return e.preventDefault();
                                      },
                                      className: "nav-link",
                                      children: [
                                        "Home ",
                                        Object(i.jsx)("i", {
                                          className: "bx bx-chevron-down",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(i.jsxs)("ul", {
                                    className: "dropdown-menu",
                                    children: [
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "eLearning School",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/index-2",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children:
                                              "Vendor Certification Training",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/index-3",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Online Training School",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/index-4",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Distance Learning",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/index-5",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Language School",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/index-6",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Modern Schooling",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/index-7",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Yoga Training",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/index-8",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Health Coaching",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(i.jsx)(g.a, {
                                          href: "/index-9",
                                          activeClassName: "active",
                                          children: Object(i.jsx)("a", {
                                            onClick: s,
                                            className: "nav-link",
                                            children: "Kindergaten",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(i.jsx)("li", {
                                className: "nav-item",
                                children: Object(i.jsx)(g.a, {
                                  href: "/courses",
                                  activeClassName: "active",
                                  children: Object(i.jsx)("a", {
                                    onClick: s,
                                    className: "nav-link",
                                    children: "Courses",
                                  }),
                                }),
                              }),
                              ((t && o) || (t && l)) &&
                                Object(i.jsx)("li", {
                                  className: "nav-item",
                                  children: Object(i.jsx)(g.a, {
                                    href: "/teacher/dashboard",
                                    children: Object(i.jsx)("a", {
                                      className: "nav-link",
                                      children: "Teacher Dashboard",
                                    }),
                                  }),
                                }),
                              t &&
                                l &&
                                Object(i.jsx)("li", {
                                  className: "nav-item",
                                  children: Object(i.jsx)(g.a, {
                                    href: "/admin/dashboard",
                                    children: Object(i.jsx)("a", {
                                      className: "nav-link",
                                      children: "Dashboard",
                                    }),
                                  }),
                                }),
                            ],
                          }),
                          Object(i.jsxs)("div", {
                            className:
                              "others-option d-flex align-items-center",
                            children: [
                              Object(i.jsx)("div", {
                                className: "option-item",
                                children: Object(i.jsx)("div", {
                                  className: "cart-btn",
                                  children: Object(i.jsx)(g.a, {
                                    href: "/cart",
                                    children: Object(i.jsxs)("a", {
                                      children: [
                                        Object(i.jsx)("i", {
                                          className: "flaticon-shopping-cart",
                                        }),
                                        " ",
                                        Object(i.jsx)("span", {
                                          children: "3",
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                              Object(i.jsx)("div", {
                                className: "option-item",
                                children: t
                                  ? Object(i.jsxs)("div", {
                                      className: "user-dropdown",
                                      children: [
                                        Object(i.jsx)(g.a, {
                                          href: "/",
                                          children: Object(i.jsxs)("a", {
                                            onClick: function (e) {
                                              return e.preventDefault();
                                            },
                                            className: "default-btn",
                                            children: [
                                              Object(i.jsx)("i", {
                                                className: "flaticon-user",
                                              }),
                                              " ",
                                              t.name,
                                              " ",
                                              Object(i.jsx)("span", {}),
                                            ],
                                          }),
                                        }),
                                        Object(i.jsxs)("ul", {
                                          className: "dropdown-menu",
                                          children: [
                                            Object(i.jsx)("li", {
                                              className: "nav-item",
                                              children: Object(i.jsx)(g.a, {
                                                href: "/my-courses",
                                                activeClassName: "active",
                                                children: Object(i.jsx)("a", {
                                                  onClick: s,
                                                  className: "nav-link",
                                                  children: "My Courses",
                                                }),
                                              }),
                                            }),
                                            Object(i.jsx)("li", {
                                              className: "nav-item",
                                              children: Object(i.jsx)(g.a, {
                                                href: "/user/my-profile",
                                                activeClassName: "active",
                                                children: Object(i.jsx)("a", {
                                                  onClick: s,
                                                  className: "nav-link",
                                                  children: "My Profile",
                                                }),
                                              }),
                                            }),
                                            Object(i.jsx)("li", {
                                              className: "nav-item",
                                              children: Object(i.jsx)(g.a, {
                                                href: "/user/edit-profile",
                                                activeClassName: "active",
                                                children: Object(i.jsx)("a", {
                                                  onClick: s,
                                                  className: "nav-link",
                                                  children: "Edit Profile",
                                                }),
                                              }),
                                            }),
                                            Object(i.jsx)("li", {
                                              className: "nav-item",
                                              children: Object(i.jsx)(g.a, {
                                                href: "/user/edit-password",
                                                activeClassName: "active",
                                                children: Object(i.jsx)("a", {
                                                  onClick: s,
                                                  className: "nav-link",
                                                  children: "Edit Password",
                                                }),
                                              }),
                                            }),
                                            Object(i.jsx)("li", {
                                              className: "nav-item",
                                              children: Object(i.jsx)(g.a, {
                                                href: "/",
                                                children: Object(i.jsx)("a", {
                                                  className: "nav-link",
                                                  onClick: function (e) {
                                                    e.preventDefault(),
                                                      Object(y.b)();
                                                  },
                                                  children: "Logout",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    })
                                  : Object(i.jsx)(g.a, {
                                      href: "/authentication",
                                      children: Object(i.jsxs)("a", {
                                        className: "default-btn",
                                        children: [
                                          Object(i.jsx)("i", {
                                            className: "flaticon-user",
                                          }),
                                          " Login/Register ",
                                          Object(i.jsx)("span", {}),
                                        ],
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
              }),
            }),
          });
        },
        I = n("MX0m"),
        D = n.n(I),
        R = function () {
          return Object(i.jsxs)(i.Fragment, {
            children: [
              Object(i.jsx)("div", {
                className: "jsx-2866176108 preloader",
                children: Object(i.jsx)("div", {
                  className: "jsx-2866176108 loader",
                  children: Object(i.jsx)("div", {
                    className: "jsx-2866176108 loadingio-spinner-reload",
                    children: Object(i.jsx)("div", {
                      className: "jsx-2866176108 ldio",
                      children: Object(i.jsxs)("div", {
                        className: "jsx-2866176108",
                        children: [
                          Object(i.jsx)("div", { className: "jsx-2866176108" }),
                          Object(i.jsx)("div", { className: "jsx-2866176108" }),
                          Object(i.jsx)("div", { className: "jsx-2866176108" }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
              Object(i.jsx)(D.a, {
                id: "2866176108",
                children: [
                  ".preloader.jsx-2866176108{top:0;left:0;right:0;bottom:0;z-index:999999999999;position:fixed;background-color:rgba(255,255,255,0.85);}",
                  ".preloader.jsx-2866176108 .loader.jsx-2866176108{top:50%;left:50%;position:absolute;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}",
                  ".preloader.jsx-2866176108 .ldio.jsx-2866176108>div.jsx-2866176108{-webkit-animation:ldio 1s infinite linear;-webkit-animation:ldio-jsx-2866176108 1s infinite linear;animation:ldio-jsx-2866176108 1s infinite linear;-webkit-transform-origin:50px 50px;-webkit-transform-origin:50px 50px;-ms-transform-origin:50px 50px;transform-origin:50px 50px;}",
                  ".preloader.jsx-2866176108 .ldio.jsx-2866176108>div.jsx-2866176108 div.jsx-2866176108{position:absolute;}",
                  ".preloader.jsx-2866176108 .ldio.jsx-2866176108>div.jsx-2866176108 div.jsx-2866176108:nth-child(1),.preloader.jsx-2866176108 .ldio.jsx-2866176108>div.jsx-2866176108 div.jsx-2866176108:nth-child(2){width:75px;height:75px;border:5px solid;border-radius:50%;border-color:transparent #fe4a55 #fe4a55 #fe4a55;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;-webkit-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:50px 50px;-webkit-transform-origin:50px 50px;-ms-transform-origin:50px 50px;transform-origin:50px 50px;}",
                  ".preloader.jsx-2866176108 .ldio.jsx-2866176108>div.jsx-2866176108 div.jsx-2866176108:nth-child(1){-webkit-transform:rotate(45deg) translate(12.5px,12.5px);-webkit-transform:rotate(45deg) translate(12.5px,12.5px);-ms-transform:rotate(45deg) translate(12.5px,12.5px);transform:rotate(45deg) translate(12.5px,12.5px);}",
                  ".preloader.jsx-2866176108 .ldio.jsx-2866176108>div.jsx-2866176108 div.jsx-2866176108:nth-child(2){-webkit-transform:rotate(0deg) translate(12.5px,12.5px);-webkit-transform:rotate(0deg) translate(12.5px,12.5px);-ms-transform:rotate(0deg) translate(12.5px,12.5px);transform:rotate(0deg) translate(12.5px,12.5px);}",
                  ".preloader.jsx-2866176108 .ldio.jsx-2866176108>div.jsx-2866176108 div.jsx-2866176108:nth-child(3){width:0;height:0;border:12px solid;border-color:transparent transparent transparent #fe4a55;-webkit-transform:translate(50px,6.5px);-webkit-transform:translate(50px,6.5px);-ms-transform:translate(50px,6.5px);transform:translate(50px,6.5px);}",
                  ".preloader.jsx-2866176108 .loadingio-spinner-reload.jsx-2866176108{width:100px;height:100px;overflow:hidden;display:inline-block;}",
                  ".preloader.jsx-2866176108 .ldio.jsx-2866176108{width:100%;height:100%;position:relative;-webkit-transform:translateZ(0) scale(1);-webkit-transform:translateZ(0) scale(1);-ms-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1);-webkit-backface-visibility:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:0 0;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;}",
                  "@-webkit-keyframes ldio{0%.jsx-2866176108{-webkit-transform:rotate(0);-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%.jsx-2866176108{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}",
                  "@-webkit-keyframes ldio-jsx-2866176108{0%{-webkit-transform:rotate(0);-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}",
                  "@keyframes ldio-jsx-2866176108{0%{-webkit-transform:rotate(0);-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}",
                ],
              }),
            ],
          });
        },
        A = function () {
          return Object(i.jsx)(i.Fragment, {
            children: Object(i.jsx)("div", {
              className: "rtl-sidebar",
              children: Object(i.jsxs)("ul", {
                children: [
                  Object(i.jsx)("li", {
                    children: Object(i.jsx)("a", {
                      href: "/",
                      title: "English",
                      children: "EN",
                    }),
                  }),
                  Object(i.jsx)("li", {
                    children: Object(i.jsx)("a", {
                      href: "/ar",
                      title: "Arabic",
                      children: "AR",
                    }),
                  }),
                  Object(i.jsx)("li", {
                    children: Object(i.jsx)("a", {
                      href: "/fr",
                      title: "French",
                      children: "FR",
                    }),
                  }),
                  Object(i.jsx)("li", {
                    children: Object(i.jsx)("a", {
                      href: "/nl",
                      title: "Netherlands",
                      children: "NL",
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        B = n("HUsl"),
        L = n.n(B),
        M = function (e) {
          var t = e.children,
            n = e.user,
            a = h.a.useState(!0),
            c = Object(u.a)(a, 2),
            r = c[0],
            s = c[1];
          h.a.useEffect(function () {
            setTimeout(function () {
              s(!1);
            }, 1e3);
          }, []),
            x.a.events.on("routeChangeStart", function () {
              s(!0);
            }),
            x.a.events.on("routeChangeComplete", function () {
              s(!1);
            }),
            x.a.events.on("routeChangeError", function () {
              s(!1);
            });
          var l = n && "student" === n.role,
            o = n && "admin" === n.role,
            d = n && "teacher" === n.role;
          return Object(i.jsxs)(h.a.Fragment, {
            children: [
              Object(i.jsxs)(m.a, {
                children: [
                  Object(i.jsx)("title", {
                    children: "eDemy - React Next.js Education LMS Template",
                  }),
                  Object(i.jsx)("meta", {
                    name: "viewport",
                    content:
                      "width=device-width, initial-scale=1, shrink-to-fit=no",
                  }),
                  Object(i.jsx)("meta", {
                    name: "description",
                    content: "eDemy - React Next.js Education LMS Template",
                  }),
                  Object(i.jsx)("meta", {
                    name: "og:title",
                    property: "og:title",
                    content: "eDemy - React Next.js Education LMS Template",
                  }),
                  Object(i.jsx)("meta", {
                    name: "twitter:card",
                    content: "eDemy - React Next.js Education LMS Template",
                  }),
                  Object(i.jsx)("link", {
                    rel: "canonical",
                    href: "https://edemy-react.envytheme.com/",
                  }),
                ],
              }),
              r && Object(i.jsx)(R, {}),
              Object(i.jsx)(v.a, { position: "top-left", reverseOrder: !1 }),
              Object(i.jsxs)(f.ToastProvider, {
                placement: "bottom-left",
                autoDismissTimeout: 1e4,
                autoDismiss: !0,
                children: [
                  l
                    ? Object(i.jsx)(E, { user: n })
                    : o || d
                    ? Object(i.jsx)(T, { user: n })
                    : Object(i.jsx)(w, { user: n }),
                  t,
                  Object(i.jsx)(O, {
                    scrollStepInPx: "100",
                    delayInMs: "10.50",
                  }),
                  Object(i.jsx)(P, {}),
                  Object(i.jsx)(A, {}),
                ],
              }),
              Object(i.jsx)(L.a, {
                children:
                  "This website uses cookies to enhance the user experience.",
              }),
            ],
          });
        },
        F = n("vDqi"),
        q = n.n(F),
        z = n("NyWP"),
        H = n("rjN7");
      function U(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? U(Object(n), !0).forEach(function (t) {
                Object(s.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : U(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var G = function (e) {
        var t = e.Component,
          n = e.pageProps;
        return Object(i.jsx)(
          M,
          Y(Y({}, n), {}, { children: Object(i.jsx)(t, Y({}, n)) })
        );
      };
      G.getInitialProps = (function () {
        var e = Object(r.a)(
          c.a.mark(function e(t) {
            var n, a, r, s, i, l, o, d, u;
            return c.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = t.Component),
                        (a = t.ctx),
                        (r = Object(z.parseCookies)(a)),
                        (s = r.token),
                        (i = {}),
                        !n.getInitialProps)
                      ) {
                        e.next = 7;
                        break;
                      }
                      return (e.next = 6), n.getInitialProps(a);
                    case 6:
                      i = e.sent;
                    case 7:
                      if (s) {
                        e.next = 12;
                        break;
                      }
                      ("/become-a-teacher" === a.pathname ||
                        "/my-courses" === a.pathname ||
                        "/teacher/courses" === a.pathname) &&
                        Object(y.c)(a, "/authentication"),
                        (e.next = 28);
                      break;
                    case 12:
                      return (
                        ("/authentication" === a.pathname ||
                          "/reset-password" === a.pathname) &&
                          Object(y.c)(a, "/"),
                        (e.prev = 14),
                        (l = { headers: { Authorization: s } }),
                        (o = "".concat(H.a, "/api/v1/auth/account")),
                        (e.next = 19),
                        q.a.get(o, l)
                      );
                    case 19:
                      (d = e.sent),
                        ((u = d.data) && u.active) ||
                          Object(z.destroyCookie)(a, "token"),
                        (i.user = u),
                        (e.next = 28);
                      break;
                    case 25:
                      (e.prev = 25),
                        (e.t0 = e.catch(14)),
                        Object(z.destroyCookie)(a, "token");
                    case 28:
                      return e.abrupt("return", { pageProps: i });
                    case 29:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[14, 25]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
      var W = G;
      t.default = Object(d.a)(
        W,
        Y(
          Y({}, o.a),
          {},
          {
            isLoader: !0,
            skipInitialProps: !1,
            loadLocaleFrom: function (e, t) {
              return n("5bgu")("./".concat(e, "/").concat(t)).then(function (
                e
              ) {
                return e.default;
              });
            },
          }
        )
      );
    },
    "3niX": function (e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.flush = function () {
          var e = r.cssRules();
          return r.flush(), e;
        }),
        (t.default = void 0);
      var a,
        c = n("q1tI");
      var r = new (
          (a = n("SevZ")) && a.__esModule ? a : { default: a }
        ).default(),
        s = (function (e) {
          var t, n;
          function a(t) {
            var n;
            return ((n = e.call(this, t) || this).prevProps = {}), n;
          }
          (n = e),
            ((t = a).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (a.dynamic = function (e) {
              return e
                .map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return r.computeId(t, n);
                })
                .join(" ");
            });
          var c = a.prototype;
          return (
            (c.shouldComponentUpdate = function (e) {
              return (
                this.props.id !== e.id ||
                String(this.props.dynamic) !== String(e.dynamic)
              );
            }),
            (c.componentWillUnmount = function () {
              r.remove(this.props);
            }),
            (c.render = function () {
              return (
                this.shouldComponentUpdate(this.prevProps) &&
                  (this.prevProps.id && r.remove(this.prevProps),
                  r.add(this.props),
                  (this.prevProps = this.props)),
                null
              );
            }),
            a
          );
        })(c.Component);
      t.default = s;
    },
    "48fX": function (e, t, n) {
      var a = n("qhzo");
      e.exports = function (e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && a(e, t);
      };
    },
    "5bgu": function (e, t, n) {
      var a = {
        "./ar/distance-learning": ["IGiW", 23],
        "./ar/distance-learning.json": ["IGiW", 23],
        "./en/distance-learning": ["8Kvu", 24],
        "./en/distance-learning.json": ["8Kvu", 24],
        "./fr/distance-learning": ["714j", 25],
        "./fr/distance-learning.json": ["714j", 25],
        "./nl/distance-learning": ["/+yD", 26],
        "./nl/distance-learning.json": ["/+yD", 26],
      };
      function c(e) {
        if (!n.o(a, e))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = a[e],
          c = t[0];
        return n.e(t[1]).then(function () {
          return n.t(c, 3);
        });
      }
      (c.keys = function () {
        return Object.keys(a);
      }),
        (c.id = "5bgu"),
        (e.exports = c);
    },
    "5fIB": function (e, t, n) {
      var a = n("7eYB");
      e.exports = function (e) {
        if (Array.isArray(e)) return a(e);
      };
    },
    "6y4a": function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "a", function () {
          return d;
        });
        var a = n("q1tI"),
          c = n.n(a),
          r = n("DlHX"),
          s = n("iEHL"),
          i = function () {
            return (i =
              Object.assign ||
              function (e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var c in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
                return e;
              }).apply(this, arguments);
          },
          l = function (e, t, n, a) {
            return new (n || (n = Promise))(function (c, r) {
              function s(e) {
                try {
                  l(a.next(e));
                } catch (t) {
                  r(t);
                }
              }
              function i(e) {
                try {
                  l(a.throw(e));
                } catch (t) {
                  r(t);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? c(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, i);
              }
              l((a = a.apply(e, t || [])).next());
            });
          },
          o = function (e, t) {
            var n,
              a,
              c,
              r,
              s = {
                label: 0,
                sent: function () {
                  if (1 & c[0]) throw c[1];
                  return c[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: i(0), throw: i(1), return: i(2) }),
              "function" === typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function i(r) {
              return function (i) {
                return (function (r) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        a &&
                          (c =
                            2 & r[0]
                              ? a.return
                              : r[0]
                              ? a.throw || ((c = a.return) && c.call(a), 0)
                              : a.next) &&
                          !(c = c.call(a, r[1])).done)
                      )
                        return c;
                      switch (((a = 0), c && (r = [2 & r[0], c.value]), r[0])) {
                        case 0:
                        case 1:
                          c = r;
                          break;
                        case 4:
                          return s.label++, { value: r[1], done: !1 };
                        case 5:
                          s.label++, (a = r[1]), (r = [0]);
                          continue;
                        case 7:
                          (r = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !(c = (c = s.trys).length > 0 && c[c.length - 1]) &&
                            (6 === r[0] || 2 === r[0])
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === r[0] &&
                            (!c || (r[1] > c[0] && r[1] < c[3]))
                          ) {
                            s.label = r[1];
                            break;
                          }
                          if (6 === r[0] && s.label < c[1]) {
                            (s.label = c[1]), (c = r);
                            break;
                          }
                          if (c && s.label < c[2]) {
                            (s.label = c[2]), s.ops.push(r);
                            break;
                          }
                          c[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      r = t.call(e, s);
                    } catch (i) {
                      (r = [6, i]), (a = 0);
                    } finally {
                      n = c = 0;
                    }
                  if (5 & r[0]) throw r[1];
                  return { value: r[0] ? r[1] : void 0, done: !0 };
                })([r, i]);
              };
            }
          };
        function d(t, n) {
          var a = this;
          function d(e) {
            var a,
              s,
              l = n.defaultLocale;
            return c.a.createElement(
              r.a,
              {
                lang:
                  (null === (a = e.pageProps) || void 0 === a
                    ? void 0
                    : a.__lang) ||
                  e.__lang ||
                  l,
                namespaces:
                  (null === (s = e.pageProps) || void 0 === s
                    ? void 0
                    : s.__namespaces) || e.__namespaces,
                config: n,
              },
              c.a.createElement(t, i({}, e))
            );
          }
          return (
            void 0 === n && (n = {}),
            n.isLoader ||
              !1 === n.loader ||
              console.warn(
                '\ud83d\udea8 [next-translate] You can remove the "appWithI18n" HoC on the _app.js, unless you set "loader: false" in your i18n config file.'
              ),
            "function" === typeof n.staticsHoc && n.staticsHoc(d, t),
            "undefined" === typeof window
              ? (e.i18nConfig = n)
              : (window.i18nConfig = n),
            n.skipInitialProps ||
              (d.getInitialProps = function (e) {
                return l(a, void 0, void 0, function () {
                  var a, c, r;
                  return o(this, function (l) {
                    switch (l.label) {
                      case 0:
                        return (
                          (a = i(i({}, e.ctx || {}), e || {})),
                          (c = { pageProps: {} }),
                          t.getInitialProps ? [4, t.getInitialProps(e)] : [3, 2]
                        );
                      case 1:
                        (c = l.sent() || {}), (l.label = 2);
                      case 2:
                        return (
                          (r = [i({}, c)]),
                          [
                            4,
                            Object(s.a)(
                              i(i(i({}, a), n), {
                                loaderName: "getInitialProps",
                              })
                            ),
                          ]
                        );
                      case 3:
                        return [2, i.apply(void 0, r.concat([l.sent()]))];
                    }
                  });
                });
              }),
            d
          );
        }
      }.call(this, n("yLpj")));
    },
    "8Kt/": function (e, t, n) {
      "use strict";
      n("oI91");
      (t.__esModule = !0), (t.defaultHead = d), (t.default = void 0);
      var a,
        c = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== typeof e && "function" !== typeof e))
            return { default: e };
          var t = o();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var c in e)
            if (Object.prototype.hasOwnProperty.call(e, c)) {
              var r = a ? Object.getOwnPropertyDescriptor(e, c) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(n, c, r)
                : (n[c] = e[c]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        r = (a = n("Xuae")) && a.__esModule ? a : { default: a },
        s = n("lwAK"),
        i = n("FYa8"),
        l = n("/0+H");
      function o() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [c.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              c.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function u(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === c.default.Fragment
          ? e.concat(
              c.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var j = ["name", "httpEquiv", "charSet", "itemProp"];
      function h(e, t) {
        return e
          .reduce(function (e, t) {
            var n = c.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(u, [])
          .reverse()
          .concat(d(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                a = {};
              return function (c) {
                var r = !0,
                  s = !1;
                if (
                  c.key &&
                  "number" !== typeof c.key &&
                  c.key.indexOf("$") > 0
                ) {
                  s = !0;
                  var i = c.key.slice(c.key.indexOf("$") + 1);
                  e.has(i) ? (r = !1) : e.add(i);
                }
                switch (c.type) {
                  case "title":
                  case "base":
                    t.has(c.type) ? (r = !1) : t.add(c.type);
                    break;
                  case "meta":
                    for (var l = 0, o = j.length; l < o; l++) {
                      var d = j[l];
                      if (c.props.hasOwnProperty(d))
                        if ("charSet" === d) n.has(d) ? (r = !1) : n.add(d);
                        else {
                          var u = c.props[d],
                            h = a[d] || new Set();
                          ("name" === d && s) || !h.has(u)
                            ? (h.add(u), (a[d] = h))
                            : (r = !1);
                        }
                    }
                }
                return r;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            return c.default.cloneElement(e, { key: n });
          });
      }
      function b(e) {
        var t = e.children,
          n = (0, c.useContext)(s.AmpStateContext),
          a = (0, c.useContext)(i.HeadManagerContext);
        return c.default.createElement(
          r.default,
          {
            reduceComponentsToState: h,
            headManager: a,
            inAmpMode: (0, l.isInAmpMode)(n),
          },
          t
        );
      }
      b.rewind = function () {};
      var m = b;
      t.default = m;
    },
    "8Q/q": function (e, t, n) {
      "use strict";
      var a = n("q1tI");
      t.a = Object(a.createContext)({
        t: function (e) {
          return Array.isArray(e) ? e[0] : e;
        },
        lang: "",
      });
    },
    "9kyW": function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        for (var t = 5381, n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n);
        return t >>> 0;
      };
    },
    AzlK: function (e, t, n) {},
    BKXN: function (e, t, n) {},
    DlHX: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var a = n("q1tI"),
        c = n.n(a),
        r = n("20a2"),
        s = n("8Q/q"),
        i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var c in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
              return e;
            }).apply(this, arguments);
        };
      function l(e) {
        var t = e.config,
          n = e.allNamespaces,
          a = e.pluralRules,
          c = e.lang,
          r = t.logger,
          s = void 0 === r ? j : r,
          l = function (e, r, j) {
            var h;
            void 0 === e && (e = "");
            var b = Array.isArray(e) ? e[0] : e,
              m = t.nsSeparator,
              f = void 0 === m ? ":" : m,
              v = t.loggerEnvironment,
              p = void 0 === v ? "browser" : v,
              x = (function (e, t) {
                if (!t) return { i18nKey: e };
                var n = e.indexOf(t);
                return n < 0
                  ? { i18nKey: e }
                  : {
                      namespace: e.slice(0, n),
                      i18nKey: e.slice(n + t.length),
                    };
              })(b, f),
              O = x.i18nKey,
              g = x.namespace,
              y =
                void 0 === g
                  ? null !== (h = null === j || void 0 === j ? void 0 : j.ns) &&
                    void 0 !== h
                    ? h
                    : t.defaultNS
                  : g,
              N = (y && n[y]) || {},
              k = (function (e, t, n, a, c) {
                if (!c || "number" !== typeof c.count) return n;
                var r = "".concat(n, "_").concat(c.count);
                if (void 0 !== o(t, r, a)) return r;
                var s = "".concat(n, "_").concat(e.select(c.count));
                if (void 0 !== o(t, s, a)) return s;
                var i = "".concat(n, ".").concat(c.count);
                if (void 0 !== o(t, i, a)) return i;
                var l = "".concat(n, ".").concat(e.select(c.count));
                return void 0 !== o(t, l, a) ? l : n;
              })(a, N, O, t, r),
              C = o(N, k, t, j),
              w =
                "undefined" === typeof C ||
                ("object" === typeof C && !Object.keys(C).length),
              S =
                "string" ===
                typeof (null === j || void 0 === j ? void 0 : j.fallback)
                  ? [j.fallback]
                  : (null === j || void 0 === j ? void 0 : j.fallback) || [];
            if (
              (!w ||
                ("both" !== p &&
                  p !== ("undefined" === typeof window ? "node" : "browser")) ||
                s({ namespace: y, i18nKey: O }),
              w && Array.isArray(S) && S.length)
            ) {
              var _ = S[0],
                P = S.slice(1);
              if ("string" === typeof _)
                return l(_, r, i(i({}, j), { fallback: P }));
            }
            return w &&
              (null === j || void 0 === j ? void 0 : j.default) &&
              0 == (null === S || void 0 === S ? void 0 : S.length)
              ? d({
                  text: null === j || void 0 === j ? void 0 : j.default,
                  query: r,
                  config: t,
                  lang: c,
                })
              : w
              ? b
              : C instanceof Object
              ? u({ obj: C, query: r, config: t, lang: c })
              : d({ text: C, query: r, config: t, lang: c });
          };
        return l;
      }
      function o(e, t, n, a) {
        void 0 === t && (t = ""), void 0 === a && (a = { returnObjects: !1 });
        var c = (n || {}).keySeparator,
          r = void 0 === c ? "." : c,
          s = (r ? t.split(r) : [t]).reduce(function (e, t) {
            if ("string" === typeof e) return {};
            var n = e[t];
            return n || ("string" === typeof n ? n : {});
          }, e);
        if ("string" === typeof s || (s instanceof Object && a.returnObjects))
          return s;
      }
      function d(e) {
        var t = e.text,
          n = e.query,
          a = e.config,
          c = e.lang;
        if (!t || !n) return t || "";
        var r = function (e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          },
          s = a.interpolation || {},
          i = s.format,
          l = void 0 === i ? null : i,
          o = s.prefix,
          d = void 0 === o ? "{{" : o,
          u = s.suffix,
          j = void 0 === u ? "}}" : u,
          h = "" === j ? "" : "(?:[\\s,]+([\\w-]*))?\\s*".concat(r(j));
        return Object.keys(n).reduce(function (e, t) {
          var a = new RegExp("".concat(r(d), "\\s*").concat(t).concat(h), "gm");
          return e.replace(a, function (e, a) {
            return a && l ? l(n[t], a, c) : n[t];
          });
        }, t);
      }
      function u(e) {
        var t = e.obj,
          n = e.query,
          a = e.config,
          c = e.lang;
        return n && 0 !== Object.keys(n).length
          ? (Object.keys(t).forEach(function (e) {
              t[e] instanceof Object &&
                u({ obj: t[e], query: n, config: a, lang: c }),
                "string" === typeof t[e] &&
                  (t[e] = d({ text: t[e], query: n, config: a, lang: c }));
            }),
            t)
          : t;
      }
      function j(e) {
        e.namespace, e.i18nKey;
      }
      var h = n("nbPw"),
        b = function () {
          return (b =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var c in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
              return e;
            }).apply(this, arguments);
        },
        m = Object(a.createContext)({ ns: {}, config: {} });
      function f(e) {
        var t = e.lang,
          n = e.namespaces,
          i = void 0 === n ? {} : n,
          o = e.children,
          d = e.config,
          u = void 0 === d ? {} : d,
          j = Object(h.a)().lang,
          f = Object(r.useRouter)() || {},
          v = f.locale,
          p = f.defaultLocale,
          x = Object(a.useContext)(m),
          O = b(b({}, x.ns), i),
          g = t || j || v || p || "",
          y = b(b({}, x.config), u),
          N = (y.localesToIgnore || ["default"]).includes(g),
          k = l({
            config: y,
            allNamespaces: O,
            pluralRules: new Intl.PluralRules(N ? void 0 : g),
            lang: g,
          });
        return c.a.createElement(
          s.a.Provider,
          { value: { lang: g, t: k } },
          c.a.createElement(m.Provider, { value: { ns: O, config: y } }, o)
        );
      }
    },
    FYa8: function (e, t, n) {
      "use strict";
      var a;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var c = (
        (a = n("q1tI")) && a.__esModule ? a : { default: a }
      ).default.createContext({});
      t.HeadManagerContext = c;
    },
    GcxT: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n("1TCz");
        },
      ]);
    },
    "HP2+": function (e, t, n) {},
    HUsl: function (e, t, n) {
      "undefined" != typeof self && self,
        (e.exports = (function () {
          var e = {
              808: function (e, t, n) {
                var a, c, r;
                void 0 ===
                  (c =
                    "function" ==
                    typeof (a = r =
                      function () {
                        function e() {
                          for (var e = 0, t = {}; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var a in n) t[a] = n[a];
                          }
                          return t;
                        }
                        function t(e) {
                          return e.replace(
                            /(%[0-9A-Z]{2})+/g,
                            decodeURIComponent
                          );
                        }
                        return (function n(a) {
                          function c() {}
                          function r(t, n, r) {
                            if ("undefined" != typeof document) {
                              "number" ==
                                typeof (r = e({ path: "/" }, c.defaults, r))
                                  .expires &&
                                (r.expires = new Date(
                                  1 * new Date() + 864e5 * r.expires
                                )),
                                (r.expires = r.expires
                                  ? r.expires.toUTCString()
                                  : "");
                              try {
                                var s = JSON.stringify(n);
                                /^[\{\[]/.test(s) && (n = s);
                              } catch (e) {}
                              (n = a.write
                                ? a.write(n, t)
                                : encodeURIComponent(String(n)).replace(
                                    /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                                    decodeURIComponent
                                  )),
                                (t = encodeURIComponent(String(t))
                                  .replace(
                                    /%(23|24|26|2B|5E|60|7C)/g,
                                    decodeURIComponent
                                  )
                                  .replace(/[\(\)]/g, escape));
                              var i = "";
                              for (var l in r)
                                r[l] &&
                                  ((i += "; " + l),
                                  !0 !== r[l] &&
                                    (i += "=" + r[l].split(";")[0]));
                              return (document.cookie = t + "=" + n + i);
                            }
                          }
                          function s(e, n) {
                            if ("undefined" != typeof document) {
                              for (
                                var c = {},
                                  r = document.cookie
                                    ? document.cookie.split("; ")
                                    : [],
                                  s = 0;
                                s < r.length;
                                s++
                              ) {
                                var i = r[s].split("="),
                                  l = i.slice(1).join("=");
                                n ||
                                  '"' !== l.charAt(0) ||
                                  (l = l.slice(1, -1));
                                try {
                                  var o = t(i[0]);
                                  if (((l = (a.read || a)(l, o) || t(l)), n))
                                    try {
                                      l = JSON.parse(l);
                                    } catch (e) {}
                                  if (((c[o] = l), e === o)) break;
                                } catch (e) {}
                              }
                              return e ? c[e] : c;
                            }
                          }
                          return (
                            (c.set = r),
                            (c.get = function (e) {
                              return s(e, !1);
                            }),
                            (c.getJSON = function (e) {
                              return s(e, !0);
                            }),
                            (c.remove = function (t, n) {
                              r(t, "", e(n, { expires: -1 }));
                            }),
                            (c.defaults = {}),
                            (c.withConverter = n),
                            c
                          );
                        })(function () {});
                      })
                      ? a.call(t, n, t, e)
                      : a) || (e.exports = c),
                  (e.exports = r());
              },
              703: function (e, t, n) {
                "use strict";
                var a = n(414);
                function c() {}
                function r() {}
                (r.resetWarningCache = c),
                  (e.exports = function () {
                    function e(e, t, n, c, r, s) {
                      if (s !== a) {
                        var i = new Error(
                          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                        );
                        throw ((i.name = "Invariant Violation"), i);
                      }
                    }
                    function t() {
                      return e;
                    }
                    e.isRequired = e;
                    var n = {
                      array: e,
                      bool: e,
                      func: e,
                      number: e,
                      object: e,
                      string: e,
                      symbol: e,
                      any: e,
                      arrayOf: t,
                      element: e,
                      elementType: e,
                      instanceOf: t,
                      node: e,
                      objectOf: t,
                      oneOf: t,
                      oneOfType: t,
                      shape: t,
                      exact: t,
                      checkPropTypes: r,
                      resetWarningCache: c,
                    };
                    return (n.PropTypes = n), n;
                  });
              },
              697: function (e, t, n) {
                e.exports = n(703)();
              },
              414: function (e) {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
              },
            },
            t = {};
          function a(n) {
            var c = t[n];
            if (void 0 !== c) return c.exports;
            var r = (t[n] = { exports: {} });
            return e[n](r, r.exports, a), r.exports;
          }
          (a.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return a.d(t, { a: t }), t;
          }),
            (a.d = function (e, t) {
              for (var n in t)
                a.o(t, n) &&
                  !a.o(e, n) &&
                  Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
            (a.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (a.r = function (e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            });
          var c = {};
          return (
            (function () {
              "use strict";
              a.r(c),
                a.d(c, {
                  Cookies: function () {
                    return l();
                  },
                  OPTIONS: function () {
                    return O;
                  },
                  SAME_SITE_OPTIONS: function () {
                    return g;
                  },
                  VISIBLE_OPTIONS: function () {
                    return y;
                  },
                  default: function () {
                    return P;
                  },
                  getCookieConsentValue: function () {
                    return N;
                  },
                  resetCookieConsentValue: function () {
                    return k;
                  },
                });
              const e = n("q1tI");
              var t = a.n(e),
                r = a(697),
                s = a.n(r),
                i = a(808),
                l = a.n(i);
              function o(e) {
                return (o =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
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
              var d = ["children"];
              function u() {
                return (u =
                  Object.assign ||
                  function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) &&
                          (e[a] = n[a]);
                    }
                    return e;
                  }).apply(this, arguments);
              }
              function j(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e);
                  t &&
                    (a = a.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, a);
                }
                return n;
              }
              function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? j(Object(n), !0).forEach(function (t) {
                        x(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : j(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              }
              function b(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var a = t[n];
                  (a.enumerable = a.enumerable || !1),
                    (a.configurable = !0),
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a);
                }
              }
              function m(e, t) {
                return (m =
                  Object.setPrototypeOf ||
                  function (e, t) {
                    return (e.__proto__ = t), e;
                  })(e, t);
              }
              function f(e, t) {
                if (t && ("object" === o(t) || "function" == typeof t))
                  return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return v(e);
              }
              function v(e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              }
              function p(e) {
                return (p = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
              }
              function x(e, t, n) {
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
              var O = { TOP: "top", BOTTOM: "bottom", NONE: "none" },
                g = { STRICT: "strict", LAX: "lax", NONE: "none" },
                y = {
                  HIDDEN: "hidden",
                  SHOW: "show",
                  BY_COOKIE_VALUE: "byCookieValue",
                },
                N = function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : w,
                    t = l().get(e);
                  return void 0 === t ? l().get(C(e)) : t;
                },
                k = function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : w;
                  l().remove(e);
                },
                C = function (e) {
                  return "".concat(e, "-legacy");
                },
                w = "CookieConsent",
                S = function (e) {
                  var t = e.condition,
                    n = e.wrapper,
                    a = e.children;
                  return t ? n(a) : a;
                },
                _ = (function (e) {
                  !(function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t && m(e, t);
                  })(i, e);
                  var n,
                    a,
                    c,
                    r,
                    s =
                      ((c = i),
                      (r = (function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                          return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              Reflect.construct(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (e) {
                          return !1;
                        }
                      })()),
                      function () {
                        var e,
                          t = p(c);
                        if (r) {
                          var n = p(this).constructor;
                          e = Reflect.construct(t, arguments, n);
                        } else e = t.apply(this, arguments);
                        return f(this, e);
                      });
                  function i(e) {
                    var t;
                    return (
                      (function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, i),
                      x(v((t = s.call(this, e))), "handleScroll", function () {
                        var e = t.props.acceptOnScrollPercentage,
                          n = document.documentElement,
                          a = document.body,
                          c = "scrollTop",
                          r = "scrollHeight";
                        ((n[c] || a[c]) / ((n[r] || a[r]) - n.clientHeight)) *
                          100 >
                          e && t.accept(!0);
                      }),
                      x(v(t), "removeScrollListener", function () {
                        t.props.acceptOnScroll &&
                          window.removeEventListener("scroll", t.handleScroll);
                      }),
                      (t.state = {
                        visible: !1,
                        style: {
                          alignItems: "baseline",
                          background: "#353535",
                          color: "white",
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "space-between",
                          left: "0",
                          position: "fixed",
                          width: "100%",
                          zIndex: "999",
                        },
                        buttonStyle: {
                          background: "#ffd42d",
                          border: "0",
                          borderRadius: "0px",
                          boxShadow: "none",
                          color: "black",
                          cursor: "pointer",
                          flex: "0 0 auto",
                          padding: "5px 10px",
                          margin: "15px",
                        },
                        declineButtonStyle: {
                          background: "#c12a2a",
                          border: "0",
                          borderRadius: "0px",
                          boxShadow: "none",
                          color: "#e5e5e5",
                          cursor: "pointer",
                          flex: "0 0 auto",
                          padding: "5px 10px",
                          margin: "15px",
                        },
                        contentStyle: { flex: "1 0 300px", margin: "15px" },
                        overlayStyle: {
                          position: "fixed",
                          left: 0,
                          top: 0,
                          width: "100%",
                          height: "100%",
                          zIndex: "999",
                          backgroundColor: "rgba(0,0,0,0.3)",
                        },
                      }),
                      t
                    );
                  }
                  return (
                    (n = i),
                    (a = [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this.props.debug;
                          (void 0 === this.getCookieValue() || e) &&
                            (this.setState({ visible: !0 }),
                            this.props.acceptOnScroll &&
                              window.addEventListener(
                                "scroll",
                                this.handleScroll,
                                { passive: !0 }
                              ));
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          this.removeScrollListener();
                        },
                      },
                      {
                        key: "accept",
                        value: function () {
                          var e =
                              arguments.length > 0 &&
                              void 0 !== arguments[0] &&
                              arguments[0],
                            t = this.props,
                            n = t.cookieName,
                            a = t.cookieValue,
                            c = t.hideOnAccept,
                            r = t.onAccept;
                          this.setCookie(n, a),
                            r(null != e && e),
                            c &&
                              (this.setState({ visible: !1 }),
                              this.removeScrollListener());
                        },
                      },
                      {
                        key: "overlayClick",
                        value: function () {
                          var e = this.props,
                            t = e.acceptOnOverlayClick,
                            n = e.onOverlayClick;
                          t && this.accept(), n();
                        },
                      },
                      {
                        key: "decline",
                        value: function () {
                          var e = this.props,
                            t = e.cookieName,
                            n = e.declineCookieValue,
                            a = e.hideOnDecline,
                            c = e.onDecline;
                          e.setDeclineCookie && this.setCookie(t, n),
                            c(),
                            a && this.setState({ visible: !1 });
                        },
                      },
                      {
                        key: "setCookie",
                        value: function (e, t) {
                          var n = this.props,
                            a = n.extraCookieOptions,
                            c = n.expires,
                            r = n.sameSite,
                            s = this.props.cookieSecurity;
                          void 0 === s &&
                            (s = !location || "https:" === location.protocol);
                          var i = h(
                            h({ expires: c }, a),
                            {},
                            { sameSite: r, secure: s }
                          );
                          r === g.NONE && l().set(C(e), t, i), l().set(e, t, i);
                        },
                      },
                      {
                        key: "getCookieValue",
                        value: function () {
                          var e = this.props.cookieName;
                          return N(e);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this;
                          switch (this.props.visible) {
                            case y.HIDDEN:
                              return null;
                            case y.BY_COOKIE_VALUE:
                              if (!this.state.visible) return null;
                          }
                          var n = this.props,
                            a = n.location,
                            c = n.style,
                            r = n.buttonStyle,
                            s = n.declineButtonStyle,
                            i = n.contentStyle,
                            l = n.disableStyles,
                            o = n.buttonText,
                            d = n.declineButtonText,
                            j = n.containerClasses,
                            b = n.contentClasses,
                            m = n.buttonClasses,
                            f = n.buttonWrapperClasses,
                            v = n.declineButtonClasses,
                            p = n.buttonId,
                            x = n.declineButtonId,
                            g = n.disableButtonStyles,
                            N = n.enableDeclineButton,
                            k = n.flipButtons,
                            C = n.ButtonComponent,
                            w = n.overlay,
                            _ = n.overlayClasses,
                            P = n.overlayStyle,
                            E = n.ariaAcceptLabel,
                            T = n.ariaDeclineLabel,
                            I = n.customContainerAttributes,
                            D = n.customContentAttributes,
                            R = n.customButtonProps,
                            A = {},
                            B = {},
                            L = {},
                            M = {},
                            F = {};
                          switch (
                            (l
                              ? ((A = u({}, c)),
                                (B = u({}, r)),
                                (L = u({}, s)),
                                (M = u({}, i)),
                                (F = u({}, P)))
                              : ((A = u({}, h(h({}, this.state.style), c))),
                                (M = u(
                                  {},
                                  h(h({}, this.state.contentStyle), i)
                                )),
                                (F = u(
                                  {},
                                  h(h({}, this.state.overlayStyle), P)
                                )),
                                g
                                  ? ((B = u({}, r)), (L = u({}, s)))
                                  : ((B = u(
                                      {},
                                      h(h({}, this.state.buttonStyle), r)
                                    )),
                                    (L = u(
                                      {},
                                      h(h({}, this.state.declineButtonStyle), s)
                                    )))),
                            a)
                          ) {
                            case O.TOP:
                              A.top = "0";
                              break;
                            case O.BOTTOM:
                              A.bottom = "0";
                          }
                          var q = [];
                          return (
                            N &&
                              q.push(
                                t().createElement(
                                  C,
                                  {
                                    key: "declineButton",
                                    style: L,
                                    className: v,
                                    id: x,
                                    "aria-label": T,
                                    onClick: function () {
                                      e.decline();
                                    },
                                  },
                                  d
                                )
                              ),
                            q.push(
                              t().createElement(
                                C,
                                u({}, R, {
                                  key: "acceptButton",
                                  style: B,
                                  className: m,
                                  id: p,
                                  "aria-label": E,
                                  onClick: function () {
                                    e.accept();
                                  },
                                }),
                                o
                              )
                            ),
                            k && q.reverse(),
                            t().createElement(
                              S,
                              {
                                condition: w,
                                wrapper: function (n) {
                                  return t().createElement(
                                    "div",
                                    {
                                      style: F,
                                      className: _,
                                      onClick: function () {
                                        e.overlayClick();
                                      },
                                    },
                                    n
                                  );
                                },
                              },
                              t().createElement(
                                "div",
                                u({ className: "".concat(j), style: A }, I),
                                t().createElement(
                                  "div",
                                  u({ style: M, className: b }, D),
                                  this.props.children
                                ),
                                t().createElement(
                                  "div",
                                  { className: "".concat(f) },
                                  q.map(function (e) {
                                    return e;
                                  })
                                )
                              )
                            )
                          );
                        },
                      },
                    ]) && b(n.prototype, a),
                    Object.defineProperty(n, "prototype", { writable: !1 }),
                    i
                  );
                })(e.Component);
              (_.propTypes = {
                location: s().oneOf(
                  Object.keys(O).map(function (e) {
                    return O[e];
                  })
                ),
                visible: s().oneOf(
                  Object.keys(y).map(function (e) {
                    return y[e];
                  })
                ),
                sameSite: s().oneOf(
                  Object.keys(g).map(function (e) {
                    return g[e];
                  })
                ),
                style: s().object,
                buttonStyle: s().object,
                declineButtonStyle: s().object,
                contentStyle: s().object,
                children: s().any,
                disableStyles: s().bool,
                hideOnAccept: s().bool,
                hideOnDecline: s().bool,
                onAccept: s().func,
                onDecline: s().func,
                buttonText: s().oneOfType([s().string, s().func, s().element]),
                declineButtonText: s().oneOfType([
                  s().string,
                  s().func,
                  s().element,
                ]),
                cookieName: s().string,
                cookieValue: s().oneOfType([s().string, s().bool, s().number]),
                declineCookieValue: s().oneOfType([
                  s().string,
                  s().bool,
                  s().number,
                ]),
                setDeclineCookie: s().bool,
                debug: s().bool,
                expires: s().number,
                containerClasses: s().string,
                contentClasses: s().string,
                buttonClasses: s().string,
                buttonWrapperClasses: s().string,
                declineButtonClasses: s().string,
                buttonId: s().string,
                declineButtonId: s().string,
                extraCookieOptions: s().object,
                disableButtonStyles: s().bool,
                enableDeclineButton: s().bool,
                flipButtons: s().bool,
                ButtonComponent: s().elementType,
                cookieSecurity: s().bool,
                overlay: s().bool,
                overlayClasses: s().string,
                overlayStyle: s().object,
                onOverlayClick: s().func,
                acceptOnOverlayClick: s().bool,
                ariaAcceptLabel: s().string,
                ariaDeclineLabel: s().string,
                acceptOnScroll: s().bool,
                acceptOnScrollPercentage: s().number,
                customContentAttributes: s().object,
                customContainerAttributes: s().object,
                customButtonProps: s().object,
              }),
                (_.defaultProps = {
                  disableStyles: !1,
                  hideOnAccept: !0,
                  hideOnDecline: !0,
                  location: O.BOTTOM,
                  visible: y.BY_COOKIE_VALUE,
                  onAccept: function () {},
                  onDecline: function () {},
                  cookieName: w,
                  cookieValue: !0,
                  declineCookieValue: !1,
                  setDeclineCookie: !0,
                  buttonText: "I understand",
                  declineButtonText: "I decline",
                  debug: !1,
                  expires: 365,
                  containerClasses: "CookieConsent",
                  contentClasses: "",
                  buttonClasses: "",
                  buttonWrapperClasses: "",
                  declineButtonClasses: "",
                  buttonId: "rcc-confirm-button",
                  declineButtonId: "rcc-decline-button",
                  extraCookieOptions: {},
                  disableButtonStyles: !1,
                  enableDeclineButton: !1,
                  flipButtons: !1,
                  sameSite: g.LAX,
                  ButtonComponent: function (e) {
                    var n = e.children,
                      a = (function (e, t) {
                        if (null == e) return {};
                        var n,
                          a,
                          c = (function (e, t) {
                            if (null == e) return {};
                            var n,
                              a,
                              c = {},
                              r = Object.keys(e);
                            for (a = 0; a < r.length; a++)
                              (n = r[a]), t.indexOf(n) >= 0 || (c[n] = e[n]);
                            return c;
                          })(e, t);
                        if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          for (a = 0; a < r.length; a++)
                            (n = r[a]),
                              t.indexOf(n) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                  e,
                                  n
                                ) &&
                                  (c[n] = e[n]));
                        }
                        return c;
                      })(e, d);
                    return t().createElement("button", a, n);
                  },
                  overlay: !1,
                  overlayClasses: "",
                  onOverlayClick: function () {},
                  acceptOnOverlayClick: !1,
                  ariaAcceptLabel: "Accept cookies",
                  ariaDeclineLabel: "Decline cookies",
                  acceptOnScroll: !1,
                  acceptOnScrollPercentage: 25,
                  customContentAttributes: {},
                  customContainerAttributes: {},
                  customButtonProps: {},
                });
              const P = _;
            })(),
            c
          );
        })());
    },
    MX0m: function (e, t, n) {
      e.exports = n("3niX");
    },
    ODXe: function (e, t, n) {
      "use strict";
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      function c(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
              var n = [],
                a = !0,
                c = !1,
                r = void 0;
              try {
                for (
                  var s, i = e[Symbol.iterator]();
                  !(a = (s = i.next()).done) &&
                  (n.push(s.value), !t || n.length !== t);
                  a = !0
                );
              } catch (l) {
                (c = !0), (r = l);
              } finally {
                try {
                  a || null == i.return || i.return();
                } finally {
                  if (c) throw r;
                }
              }
              return n;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" === typeof e) return a(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? a(e, t)
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
        return c;
      });
    },
    Q0Ar: function (e, t, n) {},
    "QV/D": function (e, t, n) {},
    QYuT: function (e, t, n) {},
    SMlj: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return l;
        }),
        n.d(t, "b", function () {
          return o;
        });
      var a = n("p46w"),
        c = n.n(a),
        r = n("20a2"),
        s = n.n(r),
        i = function (e) {
          c.a.set("token", e), s.a.push("/");
        },
        l = function (e, t) {
          e.req
            ? (e.res.writeHead(302, { Location: t }), e.res.end())
            : s.a.push(t);
        },
        o = function () {
          c.a.remove("token"), s.a.push("/");
        };
    },
    SevZ: function (e, t, n) {
      "use strict";
      (t.__esModule = !0), (t.default = void 0);
      var a = r(n("9kyW")),
        c = r(n("bVZc"));
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = (function () {
        function e(e) {
          var t = void 0 === e ? {} : e,
            n = t.styleSheet,
            a = void 0 === n ? null : n,
            r = t.optimizeForSpeed,
            s = void 0 !== r && r,
            i = t.isBrowser,
            l = void 0 === i ? "undefined" !== typeof window : i;
          (this._sheet =
            a || new c.default({ name: "styled-jsx", optimizeForSpeed: s })),
            this._sheet.inject(),
            a &&
              "boolean" === typeof s &&
              (this._sheet.setOptimizeForSpeed(s),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
            (this._isBrowser = l),
            (this._fromServer = void 0),
            (this._indices = {}),
            (this._instancesCounts = {}),
            (this.computeId = this.createComputeId()),
            (this.computeSelector = this.createComputeSelector());
        }
        var t = e.prototype;
        return (
          (t.add = function (e) {
            var t = this;
            void 0 === this._optimizeForSpeed &&
              ((this._optimizeForSpeed = Array.isArray(e.children)),
              this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              this._isBrowser &&
                !this._fromServer &&
                ((this._fromServer = this.selectFromServer()),
                (this._instancesCounts = Object.keys(this._fromServer).reduce(
                  function (e, t) {
                    return (e[t] = 0), e;
                  },
                  {}
                )));
            var n = this.getIdAndRules(e),
              a = n.styleId,
              c = n.rules;
            if (a in this._instancesCounts) this._instancesCounts[a] += 1;
            else {
              var r = c
                .map(function (e) {
                  return t._sheet.insertRule(e);
                })
                .filter(function (e) {
                  return -1 !== e;
                });
              (this._indices[a] = r), (this._instancesCounts[a] = 1);
            }
          }),
          (t.remove = function (e) {
            var t = this,
              n = this.getIdAndRules(e).styleId;
            if (
              ((function (e, t) {
                if (!e) throw new Error("StyleSheetRegistry: " + t + ".");
              })(n in this._instancesCounts, "styleId: `" + n + "` not found"),
              (this._instancesCounts[n] -= 1),
              this._instancesCounts[n] < 1)
            ) {
              var a = this._fromServer && this._fromServer[n];
              a
                ? (a.parentNode.removeChild(a), delete this._fromServer[n])
                : (this._indices[n].forEach(function (e) {
                    return t._sheet.deleteRule(e);
                  }),
                  delete this._indices[n]),
                delete this._instancesCounts[n];
            }
          }),
          (t.update = function (e, t) {
            this.add(t), this.remove(e);
          }),
          (t.flush = function () {
            this._sheet.flush(),
              this._sheet.inject(),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {}),
              (this.computeId = this.createComputeId()),
              (this.computeSelector = this.createComputeSelector());
          }),
          (t.cssRules = function () {
            var e = this,
              t = this._fromServer
                ? Object.keys(this._fromServer).map(function (t) {
                    return [t, e._fromServer[t]];
                  })
                : [],
              n = this._sheet.cssRules();
            return t.concat(
              Object.keys(this._indices)
                .map(function (t) {
                  return [
                    t,
                    e._indices[t]
                      .map(function (e) {
                        return n[e].cssText;
                      })
                      .join(e._optimizeForSpeed ? "" : "\n"),
                  ];
                })
                .filter(function (e) {
                  return Boolean(e[1]);
                })
            );
          }),
          (t.createComputeId = function () {
            var e = {};
            return function (t, n) {
              if (!n) return "jsx-" + t;
              var c = String(n),
                r = t + c;
              return (
                e[r] || (e[r] = "jsx-" + (0, a.default)(t + "-" + c)), e[r]
              );
            };
          }),
          (t.createComputeSelector = function (e) {
            void 0 === e && (e = /__jsx-style-dynamic-selector/g);
            var t = {};
            return function (n, a) {
              this._isBrowser || (a = a.replace(/\/style/gi, "\\/style"));
              var c = n + a;
              return t[c] || (t[c] = a.replace(e, n)), t[c];
            };
          }),
          (t.getIdAndRules = function (e) {
            var t = this,
              n = e.children,
              a = e.dynamic,
              c = e.id;
            if (a) {
              var r = this.computeId(c, a);
              return {
                styleId: r,
                rules: Array.isArray(n)
                  ? n.map(function (e) {
                      return t.computeSelector(r, e);
                    })
                  : [this.computeSelector(r, n)],
              };
            }
            return {
              styleId: this.computeId(c),
              rules: Array.isArray(n) ? n : [n],
            };
          }),
          (t.selectFromServer = function () {
            return Array.prototype.slice
              .call(document.querySelectorAll('[id^="__jsx-"]'))
              .reduce(function (e, t) {
                return (e[t.id.slice(2)] = t), e;
              }, {});
          }),
          e
        );
      })();
      t.default = s;
    },
    T0f4: function (e, t) {
      function n(t) {
        return (
          (e.exports = n =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          n(t)
        );
      }
      e.exports = n;
    },
    XDlY: function (e, t, n) {},
    Xuae: function (e, t, n) {
      "use strict";
      var a = n("mPvQ"),
        c = n("/GRZ"),
        r = n("i2R6"),
        s = (n("qXWd"), n("48fX")),
        i = n("tCBg"),
        l = n("T0f4");
      function o(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = l(e);
          if (t) {
            var c = l(this).constructor;
            n = Reflect.construct(a, arguments, c);
          } else n = a.apply(this, arguments);
          return i(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var d = n("q1tI"),
        u = (function (e) {
          s(n, e);
          var t = o(n);
          function n(e) {
            var r;
            return (
              c(this, n),
              ((r = t.call(this, e))._hasHeadManager = void 0),
              (r.emitChange = function () {
                r._hasHeadManager &&
                  r.props.headManager.updateHead(
                    r.props.reduceComponentsToState(
                      a(r.props.headManager.mountedInstances),
                      r.props
                    )
                  );
              }),
              (r._hasHeadManager =
                r.props.headManager && r.props.headManager.mountedInstances),
              r
            );
          }
          return (
            r(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.emitChange();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(d.Component);
      t.default = u;
    },
    Y9L4: function (e, t, n) {},
    Y9py: function (e, t, n) {},
    bVZc: function (e, t, n) {
      "use strict";
      (function (e) {
        function n(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        (t.__esModule = !0), (t.default = void 0);
        var a = "undefined" !== typeof e && e.env && !0,
          c = function (e) {
            return "[object String]" === Object.prototype.toString.call(e);
          },
          r = (function () {
            function e(e) {
              var t = void 0 === e ? {} : e,
                n = t.name,
                r = void 0 === n ? "stylesheet" : n,
                i = t.optimizeForSpeed,
                l = void 0 === i ? a : i,
                o = t.isBrowser,
                d = void 0 === o ? "undefined" !== typeof window : o;
              s(c(r), "`name` must be a string"),
                (this._name = r),
                (this._deletedRulePlaceholder =
                  "#" + r + "-deleted-rule____{}"),
                s(
                  "boolean" === typeof l,
                  "`optimizeForSpeed` must be a boolean"
                ),
                (this._optimizeForSpeed = l),
                (this._isBrowser = d),
                (this._serverSheet = void 0),
                (this._tags = []),
                (this._injected = !1),
                (this._rulesCount = 0);
              var u =
                this._isBrowser &&
                document.querySelector('meta[property="csp-nonce"]');
              this._nonce = u ? u.getAttribute("content") : null;
            }
            var t,
              r,
              i,
              l = e.prototype;
            return (
              (l.setOptimizeForSpeed = function (e) {
                s(
                  "boolean" === typeof e,
                  "`setOptimizeForSpeed` accepts a boolean"
                ),
                  s(
                    0 === this._rulesCount,
                    "optimizeForSpeed cannot be when rules have already been inserted"
                  ),
                  this.flush(),
                  (this._optimizeForSpeed = e),
                  this.inject();
              }),
              (l.isOptimizeForSpeed = function () {
                return this._optimizeForSpeed;
              }),
              (l.inject = function () {
                var e = this;
                if (
                  (s(!this._injected, "sheet already injected"),
                  (this._injected = !0),
                  this._isBrowser && this._optimizeForSpeed)
                )
                  return (
                    (this._tags[0] = this.makeStyleTag(this._name)),
                    (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                    void (
                      this._optimizeForSpeed ||
                      (a ||
                        console.warn(
                          "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                        ),
                      this.flush(),
                      (this._injected = !0))
                    )
                  );
                this._serverSheet = {
                  cssRules: [],
                  insertRule: function (t, n) {
                    return (
                      "number" === typeof n
                        ? (e._serverSheet.cssRules[n] = { cssText: t })
                        : e._serverSheet.cssRules.push({ cssText: t }),
                      n
                    );
                  },
                  deleteRule: function (t) {
                    e._serverSheet.cssRules[t] = null;
                  },
                };
              }),
              (l.getSheetForTag = function (e) {
                if (e.sheet) return e.sheet;
                for (var t = 0; t < document.styleSheets.length; t++)
                  if (document.styleSheets[t].ownerNode === e)
                    return document.styleSheets[t];
              }),
              (l.getSheet = function () {
                return this.getSheetForTag(this._tags[this._tags.length - 1]);
              }),
              (l.insertRule = function (e, t) {
                if (
                  (s(c(e), "`insertRule` accepts only strings"),
                  !this._isBrowser)
                )
                  return (
                    "number" !== typeof t &&
                      (t = this._serverSheet.cssRules.length),
                    this._serverSheet.insertRule(e, t),
                    this._rulesCount++
                  );
                if (this._optimizeForSpeed) {
                  var n = this.getSheet();
                  "number" !== typeof t && (t = n.cssRules.length);
                  try {
                    n.insertRule(e, t);
                  } catch (i) {
                    return (
                      a ||
                        console.warn(
                          "StyleSheet: illegal rule: \n\n" +
                            e +
                            "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                        ),
                      -1
                    );
                  }
                } else {
                  var r = this._tags[t];
                  this._tags.push(this.makeStyleTag(this._name, e, r));
                }
                return this._rulesCount++;
              }),
              (l.replaceRule = function (e, t) {
                if (this._optimizeForSpeed || !this._isBrowser) {
                  var n = this._isBrowser ? this.getSheet() : this._serverSheet;
                  if (
                    (t.trim() || (t = this._deletedRulePlaceholder),
                    !n.cssRules[e])
                  )
                    return e;
                  n.deleteRule(e);
                  try {
                    n.insertRule(t, e);
                  } catch (r) {
                    a ||
                      console.warn(
                        "StyleSheet: illegal rule: \n\n" +
                          t +
                          "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                      ),
                      n.insertRule(this._deletedRulePlaceholder, e);
                  }
                } else {
                  var c = this._tags[e];
                  s(c, "old rule at index `" + e + "` not found"),
                    (c.textContent = t);
                }
                return e;
              }),
              (l.deleteRule = function (e) {
                if (this._isBrowser)
                  if (this._optimizeForSpeed) this.replaceRule(e, "");
                  else {
                    var t = this._tags[e];
                    s(t, "rule at index `" + e + "` not found"),
                      t.parentNode.removeChild(t),
                      (this._tags[e] = null);
                  }
                else this._serverSheet.deleteRule(e);
              }),
              (l.flush = function () {
                (this._injected = !1),
                  (this._rulesCount = 0),
                  this._isBrowser
                    ? (this._tags.forEach(function (e) {
                        return e && e.parentNode.removeChild(e);
                      }),
                      (this._tags = []))
                    : (this._serverSheet.cssRules = []);
              }),
              (l.cssRules = function () {
                var e = this;
                return this._isBrowser
                  ? this._tags.reduce(function (t, n) {
                      return (
                        n
                          ? (t = t.concat(
                              Array.prototype.map.call(
                                e.getSheetForTag(n).cssRules,
                                function (t) {
                                  return t.cssText === e._deletedRulePlaceholder
                                    ? null
                                    : t;
                                }
                              )
                            ))
                          : t.push(null),
                        t
                      );
                    }, [])
                  : this._serverSheet.cssRules;
              }),
              (l.makeStyleTag = function (e, t, n) {
                t &&
                  s(
                    c(t),
                    "makeStyleTag acceps only strings as second parameter"
                  );
                var a = document.createElement("style");
                this._nonce && a.setAttribute("nonce", this._nonce),
                  (a.type = "text/css"),
                  a.setAttribute("data-" + e, ""),
                  t && a.appendChild(document.createTextNode(t));
                var r =
                  document.head || document.getElementsByTagName("head")[0];
                return n ? r.insertBefore(a, n) : r.appendChild(a), a;
              }),
              (t = e),
              (r = [
                {
                  key: "length",
                  get: function () {
                    return this._rulesCount;
                  },
                },
              ]) && n(t.prototype, r),
              i && n(t, i),
              e
            );
          })();
        function s(e, t) {
          if (!e) throw new Error("StyleSheet: " + t + ".");
        }
        t.default = r;
      }.call(this, n("8oxB")));
    },
    eIeG: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var a = function (e, t, n, a) {
          return new (n || (n = Promise))(function (c, r) {
            function s(e) {
              try {
                l(a.next(e));
              } catch (t) {
                r(t);
              }
            }
            function i(e) {
              try {
                l(a.throw(e));
              } catch (t) {
                r(t);
              }
            }
            function l(e) {
              var t;
              e.done
                ? c(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, i);
            }
            l((a = a.apply(e, t || [])).next());
          });
        },
        c = function (e, t) {
          var n,
            a,
            c,
            r,
            s = {
              label: 0,
              sent: function () {
                if (1 & c[0]) throw c[1];
                return c[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (r = { next: i(0), throw: i(1), return: i(2) }),
            "function" === typeof Symbol &&
              (r[Symbol.iterator] = function () {
                return this;
              }),
            r
          );
          function i(r) {
            return function (i) {
              return (function (r) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      a &&
                        (c =
                          2 & r[0]
                            ? a.return
                            : r[0]
                            ? a.throw || ((c = a.return) && c.call(a), 0)
                            : a.next) &&
                        !(c = c.call(a, r[1])).done)
                    )
                      return c;
                    switch (((a = 0), c && (r = [2 & r[0], c.value]), r[0])) {
                      case 0:
                      case 1:
                        c = r;
                        break;
                      case 4:
                        return s.label++, { value: r[1], done: !1 };
                      case 5:
                        s.label++, (a = r[1]), (r = [0]);
                        continue;
                      case 7:
                        (r = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(c = (c = s.trys).length > 0 && c[c.length - 1]) &&
                          (6 === r[0] || 2 === r[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === r[0] &&
                          (!c || (r[1] > c[0] && r[1] < c[3]))
                        ) {
                          s.label = r[1];
                          break;
                        }
                        if (6 === r[0] && s.label < c[1]) {
                          (s.label = c[1]), (c = r);
                          break;
                        }
                        if (c && s.label < c[2]) {
                          (s.label = c[2]), s.ops.push(r);
                          break;
                        }
                        c[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    r = t.call(e, s);
                  } catch (i) {
                    (r = [6, i]), (a = 0);
                  } finally {
                    n = c = 0;
                  }
                if (5 & r[0]) throw r[1];
                return { value: r[0] ? r[1] : void 0, done: !0 };
              })([r, i]);
            };
          }
        },
        r = function (e, t, n) {
          if (n || 2 === arguments.length)
            for (var a, c = 0, r = t.length; c < r; c++)
              (!a && c in t) ||
                (a || (a = Array.prototype.slice.call(t, 0, c)), (a[c] = t[c]));
          return e.concat(a || Array.prototype.slice.call(t));
        };
      function s(e) {
        return e.reduce(function (e, t) {
          return e.concat(t);
        }, []);
      }
      function i(e, t, n) {
        var i = e.pages,
          l = void 0 === i ? {} : i;
        return a(this, void 0, void 0, function () {
          var e,
            i,
            o,
            d,
            u,
            j,
            h,
            b = this;
          return c(this, function (m) {
            switch (m.label) {
              case 0:
                return (
                  (e = "rgx:"),
                  (i = function (e) {
                    return a(b, void 0, void 0, function () {
                      return c(this, function (t) {
                        return [2, "function" === typeof e ? e(n) : e || []];
                      });
                    });
                  }),
                  (o = Object.keys(l).reduce(function (n, a) {
                    return (
                      a.substring(0, e.length) === e &&
                        new RegExp(a.replace(e, "")).test(t) &&
                        n.push(i(l[a])),
                      n
                    );
                  }, [])),
                  (d = [[]]),
                  [4, i(l["*"])]
                );
              case 1:
                return (
                  (u = [r.apply(void 0, d.concat([m.sent(), !0]))]),
                  [4, i(l[t])]
                );
              case 2:
                return (
                  (j = [r.apply(void 0, u.concat([m.sent(), !0]))]),
                  (h = s),
                  [4, Promise.all(o)]
                );
              case 3:
                return [
                  2,
                  r.apply(void 0, j.concat([h.apply(void 0, [m.sent()]), !0])),
                ];
            }
          });
        });
      }
    },
    g4pe: function (e, t, n) {
      e.exports = n("8Kt/");
    },
    "h+no": function (e, t, n) {},
    iEHL: function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "a", function () {
          return o;
        });
        var a = n("tX2r"),
          c = n("eIeG"),
          r = function () {
            return (r =
              Object.assign ||
              function (e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var c in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
                return e;
              }).apply(this, arguments);
          },
          s = function (e, t, n, a) {
            return new (n || (n = Promise))(function (c, r) {
              function s(e) {
                try {
                  l(a.next(e));
                } catch (t) {
                  r(t);
                }
              }
              function i(e) {
                try {
                  l(a.throw(e));
                } catch (t) {
                  r(t);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? c(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, i);
              }
              l((a = a.apply(e, t || [])).next());
            });
          },
          i = function (e, t) {
            var n,
              a,
              c,
              r,
              s = {
                label: 0,
                sent: function () {
                  if (1 & c[0]) throw c[1];
                  return c[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: i(0), throw: i(1), return: i(2) }),
              "function" === typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function i(r) {
              return function (i) {
                return (function (r) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        a &&
                          (c =
                            2 & r[0]
                              ? a.return
                              : r[0]
                              ? a.throw || ((c = a.return) && c.call(a), 0)
                              : a.next) &&
                          !(c = c.call(a, r[1])).done)
                      )
                        return c;
                      switch (((a = 0), c && (r = [2 & r[0], c.value]), r[0])) {
                        case 0:
                        case 1:
                          c = r;
                          break;
                        case 4:
                          return s.label++, { value: r[1], done: !1 };
                        case 5:
                          s.label++, (a = r[1]), (r = [0]);
                          continue;
                        case 7:
                          (r = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !(c = (c = s.trys).length > 0 && c[c.length - 1]) &&
                            (6 === r[0] || 2 === r[0])
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === r[0] &&
                            (!c || (r[1] > c[0] && r[1] < c[3]))
                          ) {
                            s.label = r[1];
                            break;
                          }
                          if (6 === r[0] && s.label < c[1]) {
                            (s.label = c[1]), (c = r);
                            break;
                          }
                          if (c && s.label < c[2]) {
                            (s.label = c[2]), s.ops.push(r);
                            break;
                          }
                          c[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      r = t.call(e, s);
                    } catch (i) {
                      (r = [6, i]), (a = 0);
                    } finally {
                      n = c = 0;
                    }
                  if (5 & r[0]) throw r[1];
                  return { value: r[0] ? r[1] : void 0, done: !0 };
                })([r, i]);
              };
            }
          },
          l =
            null == e.env.NODE_DISABLE_COLORS &&
            null == e.env.NO_COLOR &&
            "dumb" !== e.env.TERM &&
            "0" !== e.env.FORCE_COLOR;
        function o(e) {
          var t, n;
          return (
            void 0 === e && (e = {}),
            s(this, void 0, void 0, function () {
              var s, o, d, u, j, h, b, m;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (s = r(r({}, Object(a.a)()), e)),
                      (o = s.localesToIgnore || ["default"]),
                      (d =
                        (null === (t = s.req) || void 0 === t
                          ? void 0
                          : t.locale) ||
                        s.locale ||
                        (null === (n = s.router) || void 0 === n
                          ? void 0
                          : n.locale) ||
                        s.defaultLocale ||
                        ""),
                      s.pathname
                        ? o.includes(d)
                          ? [2, { __lang: d }]
                          : (s.loaderName ||
                              !1 === s.loader ||
                              console.warn(
                                '\ud83d\udea8 [next-translate] You can remove the "loadNamespaces" helper, unless you set "loader: false" in your i18n config file.'
                              ),
                            (u =
                              (function (e) {
                                void 0 === e && (e = "");
                                return e.length > 1 && e.endsWith("/")
                                  ? e.slice(0, -1)
                                  : e;
                              })(s.pathname.replace(/\/index$/, "")) || "/"),
                            [4, Object(c.a)(s, u, s)])
                        : (console.warn(
                            '\ud83d\udea8 [next-translate] You forgot to pass the "pathname" inside "loadNamespaces" configuration'
                          ),
                          [2, { __lang: d }])
                    );
                  case 1:
                    return (
                      (j = i.sent()),
                      (h = function () {
                        return Promise.resolve({});
                      }),
                      [
                        4,
                        Promise.all(
                          j.map(function (e) {
                            return "function" === typeof s.loadLocaleFrom
                              ? s.loadLocaleFrom(d, e)
                              : h();
                          })
                        ).catch(function () {}),
                      ]
                    );
                  case 2:
                    return (
                      (b = i.sent() || []),
                      !1 !== s.logBuild &&
                        "undefined" === typeof window &&
                        ((m = function (e) {
                          return l ? "\x1b[36m".concat(e, "\x1b[0m") : e;
                        }),
                        console.log(
                          m("next-translate"),
                          "- compiled page:",
                          m(u),
                          "- locale:",
                          m(d),
                          "- namespaces:",
                          m(j.join(", ")),
                          "- used loader:",
                          m(s.loaderName || "-")
                        )),
                      [
                        2,
                        {
                          __lang: d,
                          __namespaces: j.reduce(function (e, t, n) {
                            return (e[t] = b[n] || null), e;
                          }, {}),
                        },
                      ]
                    );
                }
              });
            })
          );
        }
      }.call(this, n("8oxB")));
    },
    k7Sn: function (e, t) {
      e.exports = {
        locales: ["en", "fr", "nl", "ar"],
        defaultLocale: "en",
        pages: { "/": ["distance-learning"] },
      };
    },
    kG2m: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    lwAK: function (e, t, n) {
      "use strict";
      var a;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var c = (
        (a = n("q1tI")) && a.__esModule ? a : { default: a }
      ).default.createContext({});
      t.AmpStateContext = c;
    },
    mPvQ: function (e, t, n) {
      var a = n("5fIB"),
        c = n("rlHP"),
        r = n("KckH"),
        s = n("kG2m");
      e.exports = function (e) {
        return a(e) || c(e) || r(e) || s();
      };
    },
    nbPw: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var a = n("q1tI"),
        c = function () {
          return (c =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var c in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
              return e;
            }).apply(this, arguments);
        };
      function r(e, t) {
        if ("string" !== typeof t) return e;
        return function (n, a, r) {
          return e(n, a, c({ ns: t }, r));
        };
      }
      var s = n("8Q/q"),
        i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var c in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
              return e;
            }).apply(this, arguments);
        };
      function l(e) {
        var t = Object(a.useContext)(s.a);
        return Object(a.useMemo)(
          function () {
            return i(i({}, t), { t: r(t.t, e) });
          },
          [t.lang, e]
        );
      }
    },
    oI91: function (e, t) {
      e.exports = function (e, t, n) {
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
      };
    },
    p46w: function (e, t, n) {
      var a, c;
      !(function (r) {
        if (
          (void 0 ===
            (c = "function" === typeof (a = r) ? a.call(t, n, t, e) : a) ||
            (e.exports = c),
          !0,
          (e.exports = r()),
          !!0)
        ) {
          var s = window.Cookies,
            i = (window.Cookies = r());
          i.noConflict = function () {
            return (window.Cookies = s), i;
          };
        }
      })(function () {
        function e() {
          for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e];
            for (var a in n) t[a] = n[a];
          }
          return t;
        }
        function t(e) {
          return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
        }
        return (function n(a) {
          function c() {}
          function r(t, n, r) {
            if ("undefined" !== typeof document) {
              "number" ===
                typeof (r = e({ path: "/" }, c.defaults, r)).expires &&
                (r.expires = new Date(1 * new Date() + 864e5 * r.expires)),
                (r.expires = r.expires ? r.expires.toUTCString() : "");
              try {
                var s = JSON.stringify(n);
                /^[\{\[]/.test(s) && (n = s);
              } catch (o) {}
              (n = a.write
                ? a.write(n, t)
                : encodeURIComponent(String(n)).replace(
                    /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                    decodeURIComponent
                  )),
                (t = encodeURIComponent(String(t))
                  .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                  .replace(/[\(\)]/g, escape));
              var i = "";
              for (var l in r)
                r[l] &&
                  ((i += "; " + l),
                  !0 !== r[l] && (i += "=" + r[l].split(";")[0]));
              return (document.cookie = t + "=" + n + i);
            }
          }
          function s(e, n) {
            if ("undefined" !== typeof document) {
              for (
                var c = {},
                  r = document.cookie ? document.cookie.split("; ") : [],
                  s = 0;
                s < r.length;
                s++
              ) {
                var i = r[s].split("="),
                  l = i.slice(1).join("=");
                n || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                try {
                  var o = t(i[0]);
                  if (((l = (a.read || a)(l, o) || t(l)), n))
                    try {
                      l = JSON.parse(l);
                    } catch (d) {}
                  if (((c[o] = l), e === o)) break;
                } catch (d) {}
              }
              return e ? c[e] : c;
            }
          }
          return (
            (c.set = r),
            (c.get = function (e) {
              return s(e, !1);
            }),
            (c.getJSON = function (e) {
              return s(e, !0);
            }),
            (c.remove = function (t, n) {
              r(t, "", e(n, { expires: -1 }));
            }),
            (c.defaults = {}),
            (c.withConverter = n),
            c
          );
        })(function () {});
      });
    },
    qXWd: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    rlHP: function (e, t) {
      e.exports = function (e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    tCBg: function (e, t, n) {
      var a = n("C+bE"),
        c = n("qXWd");
      e.exports = function (e, t) {
        return !t || ("object" !== a(t) && "function" !== typeof t) ? c(e) : t;
      };
    },
    tX2r: function (e, t, n) {
      "use strict";
      (function (e) {
        function a() {
          return ("undefined" === typeof window ? e : window).i18nConfig;
        }
        n.d(t, "a", function () {
          return a;
        });
      }.call(this, n("yLpj")));
    },
    yLpj: function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (a) {
        "object" === typeof window && (n = window);
      }
      e.exports = n;
    },
    zsx9: function (e, t, n) {},
  },
  [[1, 1, 0, 28, 29, 2, 5, 7, 9, 13]],
]);
