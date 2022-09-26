_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [66],
  {
    "/0+H": function (e, t, s) {
      "use strict";
      (t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(a.default.useContext(n.AmpStateContext));
        });
      var c,
        a = (c = s("q1tI")) && c.__esModule ? c : { default: c },
        n = s("lwAK");
      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          s = void 0 !== t && t,
          c = e.hybrid,
          a = void 0 !== c && c,
          n = e.hasQuery,
          i = void 0 !== n && n;
        return s || (a && i);
      }
    },
    "48fX": function (e, t, s) {
      var c = s("qhzo");
      e.exports = function (e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && c(e, t);
      };
    },
    "5fIB": function (e, t, s) {
      var c = s("7eYB");
      e.exports = function (e) {
        if (Array.isArray(e)) return c(e);
      };
    },
    "8Kt/": function (e, t, s) {
      "use strict";
      s("oI91");
      (t.__esModule = !0), (t.defaultHead = j), (t.default = void 0);
      var c,
        a = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== typeof e && "function" !== typeof e))
            return { default: e };
          var t = o();
          if (t && t.has(e)) return t.get(e);
          var s = {},
            c = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var n = c ? Object.getOwnPropertyDescriptor(e, a) : null;
              n && (n.get || n.set)
                ? Object.defineProperty(s, a, n)
                : (s[a] = e[a]);
            }
          (s.default = e), t && t.set(e, s);
          return s;
        })(s("q1tI")),
        n = (c = s("Xuae")) && c.__esModule ? c : { default: c },
        i = s("lwAK"),
        r = s("FYa8"),
        l = s("/0+H");
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
      function j() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [a.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              a.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function d(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(function (
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
      var b = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(e, t) {
        return e
          .reduce(function (e, t) {
            var s = a.default.Children.toArray(t.props.children);
            return e.concat(s);
          }, [])
          .reduce(d, [])
          .reverse()
          .concat(j(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                s = new Set(),
                c = {};
              return function (a) {
                var n = !0,
                  i = !1;
                if (
                  a.key &&
                  "number" !== typeof a.key &&
                  a.key.indexOf("$") > 0
                ) {
                  i = !0;
                  var r = a.key.slice(a.key.indexOf("$") + 1);
                  e.has(r) ? (n = !1) : e.add(r);
                }
                switch (a.type) {
                  case "title":
                  case "base":
                    t.has(a.type) ? (n = !1) : t.add(a.type);
                    break;
                  case "meta":
                    for (var l = 0, o = b.length; l < o; l++) {
                      var j = b[l];
                      if (a.props.hasOwnProperty(j))
                        if ("charSet" === j) s.has(j) ? (n = !1) : s.add(j);
                        else {
                          var d = a.props[j],
                            m = c[j] || new Set();
                          ("name" === j && i) || !m.has(d)
                            ? (m.add(d), (c[j] = m))
                            : (n = !1);
                        }
                    }
                }
                return n;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var s = e.key || t;
            return a.default.cloneElement(e, { key: s });
          });
      }
      function u(e) {
        var t = e.children,
          s = (0, a.useContext)(i.AmpStateContext),
          c = (0, a.useContext)(r.HeadManagerContext);
        return a.default.createElement(
          n.default,
          {
            reduceComponentsToState: m,
            headManager: c,
            inAmpMode: (0, l.isInAmpMode)(s),
          },
          t
        );
      }
      u.rewind = function () {};
      var h = u;
      t.default = h;
    },
    "8Q/q": function (e, t, s) {
      "use strict";
      var c = s("q1tI");
      t.a = Object(c.createContext)({
        t: function (e) {
          return Array.isArray(e) ? e[0] : e;
        },
        lang: "",
      });
    },
    FYa8: function (e, t, s) {
      "use strict";
      var c;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var a = (
        (c = s("q1tI")) && c.__esModule ? c : { default: c }
      ).default.createContext({});
      t.HeadManagerContext = a;
    },
    RNiq: function (e, t, s) {
      "use strict";
      s.r(t);
      var c = s("o0o1"),
        a = s.n(c),
        n = s("HaE+"),
        i = s("nKUr"),
        r = s("q1tI"),
        l = s.n(r),
        o = s("nbPw"),
        j = s("YFqc"),
        d = s.n(j),
        b = function () {
          var e = Object(o.a)("distance-learning").t;
          return Object(i.jsxs)("div", {
            className: "main-banner-area",
            children: [
              Object(i.jsx)("div", {
                className: "container-fluid",
                children: Object(i.jsxs)("div", {
                  className: "row align-items-center",
                  children: [
                    Object(i.jsx)("div", {
                      className: "col-lg-6 col-md-12",
                      children: Object(i.jsxs)("div", {
                        className: "main-banner-content-style-two",
                        children: [
                          Object(i.jsx)("h1", { children: e("bannertitle") }),
                          Object(i.jsx)("p", { children: e("bannersubtitle") }),
                          Object(i.jsx)(d.a, {
                            href: "/authentication",
                            children: Object(i.jsxs)("a", {
                              className: "default-btn",
                              children: [
                                Object(i.jsx)("i", {
                                  className: "flaticon-user",
                                }),
                                e("button"),
                                Object(i.jsx)("span", {}),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-6 col-md-12",
                      children: Object(i.jsx)("div", {
                        className: "main-banner-image-style-two",
                        children: Object(i.jsx)("img", {
                          src: "/images/banner-img4.png",
                          alt: "image",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              Object(i.jsx)("div", {
                className: "banner-shape1",
                children: Object(i.jsx)("img", {
                  src: "/images/banner-shape1.png",
                  alt: "image",
                }),
              }),
              Object(i.jsx)("div", {
                className: "banner-shape2",
                children: Object(i.jsx)("img", {
                  src: "/images/banner-shape2.png",
                  alt: "image",
                }),
              }),
              Object(i.jsx)("div", {
                className: "banner-shape3",
                children: Object(i.jsx)("img", {
                  src: "/images/banner-shape3.png",
                  alt: "image",
                }),
              }),
              Object(i.jsx)("div", {
                className: "bulb",
                children: Object(i.jsx)("img", {
                  src: "/images/bulb.png",
                  alt: "image",
                }),
              }),
            ],
          });
        },
        m = function () {
          var e = Object(o.a)("distance-learning").t;
          return Object(i.jsx)("div", {
            className: "features-area pt-100 pb-70 bg-fff8f8",
            children: Object(i.jsxs)("div", {
              className: "container",
              children: [
                Object(i.jsxs)("div", {
                  className: "section-title",
                  children: [
                    Object(i.jsx)("span", {
                      className: "sub-title",
                      children: e("education-for-everyone"),
                    }),
                    Object(i.jsxs)("h2", {
                      children: [e("features-heading"), "\u200b"],
                    }),
                    Object(i.jsx)("p", { children: e("features-description") }),
                  ],
                }),
                Object(i.jsxs)("div", {
                  className: "row justify-content-center",
                  children: [
                    Object(i.jsx)("div", {
                      className: "col-lg-4 col-sm-6 col-md-6",
                      children: Object(i.jsxs)("div", {
                        className: "features-box",
                        children: [
                          Object(i.jsx)("div", {
                            className: "icon",
                            children: Object(i.jsx)("i", {
                              className: "flaticon-brain-process",
                            }),
                          }),
                          Object(i.jsx)("h3", {
                            children: e("learn-latest-skills"),
                          }),
                          Object(i.jsxs)("p", {
                            children: [e("skills-description"), " "],
                          }),
                          Object(i.jsx)(d.a, {
                            href: "/authentication",
                            children: Object(i.jsx)("a", {
                              className: "link-btn",
                              children: e("start-now"),
                            }),
                          }),
                          Object(i.jsx)("div", {
                            className: "back-icon",
                            children: Object(i.jsx)("i", {
                              className: "flaticon-brain-process",
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-4 col-sm-6 col-md-6",
                      children: Object(i.jsxs)("div", {
                        className: "features-box",
                        children: [
                          Object(i.jsx)("div", {
                            className: "icon",
                            children: Object(i.jsx)("i", {
                              className: "flaticon-shield-1",
                            }),
                          }),
                          Object(i.jsx)("h3", {
                            children: e("learn-industry-experts"),
                          }),
                          Object(i.jsxs)("p", {
                            children: [e("industry-description"), " "],
                          }),
                          Object(i.jsx)(d.a, {
                            href: "/authentication",
                            children: Object(i.jsx)("a", {
                              className: "link-btn",
                              children: e("start-now"),
                            }),
                          }),
                          Object(i.jsx)("div", {
                            className: "back-icon",
                            children: Object(i.jsx)("i", {
                              className: "flaticon-shield-1",
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-4 col-sm-6 col-md-6",
                      children: Object(i.jsxs)("div", {
                        className: "features-box",
                        children: [
                          Object(i.jsx)("div", {
                            className: "icon",
                            children: Object(i.jsx)("i", {
                              className: "flaticon-world",
                            }),
                          }),
                          Object(i.jsx)("h3", {
                            children: e("learn-anywhere"),
                          }),
                          Object(i.jsxs)("p", {
                            children: [e("learn-description"), " "],
                          }),
                          Object(i.jsx)(d.a, {
                            href: "/authentication",
                            children: Object(i.jsx)("a", {
                              className: "link-btn",
                              children: e("start-now"),
                            }),
                          }),
                          Object(i.jsx)("div", {
                            className: "back-icon",
                            children: Object(i.jsx)("i", {
                              className: "flaticon-world",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        u = function (e) {
          var t = e.courses,
            s = Object(o.a)("distance-learning").t;
          return Object(i.jsx)("div", {
            className: "courses-area ptb-100",
            children: Object(i.jsxs)("div", {
              className: "container",
              children: [
                Object(i.jsxs)("div", {
                  className: "section-title",
                  children: [
                    Object(i.jsx)("span", {
                      className: "sub-title",
                      children: s("course-top-text"),
                    }),
                    Object(i.jsx)("h2", { children: s("course-heading") }),
                    Object(i.jsx)("p", { children: s("course-description") }),
                  ],
                }),
                Object(i.jsxs)("div", {
                  className: "row",
                  children: [
                    t
                      ? t.map(function (e) {
                          return Object(i.jsx)(
                            "div",
                            {
                              className: "col-lg-4 col-md-6",
                              children: Object(i.jsxs)("div", {
                                className: "single-courses-box",
                                children: [
                                  Object(i.jsxs)("div", {
                                    className: "courses-image",
                                    children: [
                                      Object(i.jsx)(d.a, {
                                        href: "/courses/[id]",
                                        as: "/courses/".concat(e.id),
                                        children: Object(i.jsx)("a", {
                                          className: "d-block image",
                                          children: Object(i.jsx)("img", {
                                            src: e.profilePhoto,
                                            alt: e.title,
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)(d.a, {
                                        href: "#",
                                        children: Object(i.jsx)("a", {
                                          className: "fav",
                                          children: Object(i.jsx)("i", {
                                            className: "flaticon-heart",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsxs)("div", {
                                        className: "price shadow",
                                        children: ["$", e.price],
                                      }),
                                    ],
                                  }),
                                  Object(i.jsxs)("div", {
                                    className: "courses-content",
                                    children: [
                                      Object(i.jsxs)("div", {
                                        className:
                                          "course-author d-flex align-items-center",
                                        children: [
                                          Object(i.jsx)("img", {
                                            src: "".concat(
                                              e.user.profilePhoto
                                                ? e.user.profilePhoto
                                                : "/images/user1.jpg"
                                            ),
                                            className: "rounded-circle",
                                            alt: e.user.name,
                                          }),
                                          Object(i.jsx)("span", {
                                            children: e.user.name,
                                          }),
                                        ],
                                      }),
                                      Object(i.jsx)("h3", {
                                        title: e.title,
                                        children: Object(i.jsx)(d.a, {
                                          href: "/courses/[id]",
                                          as: "/courses/".concat(e.id),
                                          children: Object(i.jsxs)("a", {
                                            children: [
                                              e.title.slice(0, 20),
                                              "...",
                                            ],
                                          }),
                                        }),
                                      }),
                                      Object(i.jsxs)("p", {
                                        children: [
                                          e.overview.slice(0, 100),
                                          "...",
                                        ],
                                      }),
                                      Object(i.jsxs)("ul", {
                                        className:
                                          "courses-box-footer d-flex justify-content-between align-items-center",
                                        children: [
                                          Object(i.jsxs)("li", {
                                            children: [
                                              Object(i.jsx)("i", {
                                                className: "flaticon-agenda",
                                              }),
                                              " ",
                                              parseInt(e.lessons),
                                              " ",
                                              "Lessons",
                                            ],
                                          }),
                                          Object(i.jsxs)("li", {
                                            children: [
                                              Object(i.jsx)("i", {
                                                className: "flaticon-people",
                                              }),
                                              " ",
                                              e.enroled_courses.length,
                                              " ",
                                              "Students",
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            e.id
                          );
                        })
                      : Object(i.jsx)("h2", { children: "Empty" }),
                    Object(i.jsx)("div", {
                      className: "col-lg-12 col-md-12",
                      children: Object(i.jsx)("div", {
                        className: "courses-info",
                        children: Object(i.jsxs)("p", {
                          children: [
                            s("course-description2"),
                            " ",
                            Object(i.jsx)(d.a, {
                              href: "/authentication",
                              children: Object(i.jsx)("a", {
                                children: s("join-free-now"),
                              }),
                            }),
                            ".",
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        h = function () {
          var e = Object(o.a)("distance-learning").t;
          return Object(i.jsxs)("div", {
            className: "about-area ptb-100 bg-f9fbff",
            children: [
              Object(i.jsx)("div", {
                className: "container",
                children: Object(i.jsxs)("div", {
                  className: "row align-items-center",
                  children: [
                    Object(i.jsx)("div", {
                      className: "col-lg-6 col-md-12",
                      children: Object(i.jsx)("div", {
                        className: "about-image",
                        children: Object(i.jsx)("img", {
                          src: "/images/about-img12.png",
                          alt: "image",
                        }),
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-6 col-md-12",
                      children: Object(i.jsxs)("div", {
                        className: "about-content",
                        children: [
                          Object(i.jsx)("span", {
                            className: "sub-title",
                            children: e("distance-learning"),
                          }),
                          Object(i.jsx)("h2", {
                            children: e("distance-learning-heading"),
                          }),
                          Object(i.jsx)("p", {
                            children: e("distance-learning-desc"),
                          }),
                          Object(i.jsxs)("ul", {
                            className: "features-list",
                            children: [
                              Object(i.jsx)("li", {
                                children: Object(i.jsxs)("span", {
                                  children: [
                                    Object(i.jsx)("i", {
                                      className: "flaticon-experience",
                                    }),
                                    " ",
                                    e("expert-instruction"),
                                  ],
                                }),
                              }),
                              Object(i.jsx)("li", {
                                children: Object(i.jsxs)("span", {
                                  children: [
                                    Object(i.jsx)("i", {
                                      className: "flaticon-time-left",
                                    }),
                                    " ",
                                    e("lifetime-access"),
                                  ],
                                }),
                              }),
                              Object(i.jsx)("li", {
                                children: Object(i.jsxs)("span", {
                                  children: [
                                    Object(i.jsx)("i", {
                                      className: "flaticon-tutorials",
                                    }),
                                    " ",
                                    e("remote-learning"),
                                  ],
                                }),
                              }),
                              Object(i.jsx)("li", {
                                children: Object(i.jsxs)("span", {
                                  children: [
                                    Object(i.jsx)("i", {
                                      className: "flaticon-self-growth",
                                    }),
                                    " ",
                                    e("self-development"),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          Object(i.jsx)(d.a, {
                            href: "/courses-1",
                            children: Object(i.jsxs)("a", {
                              className: "default-btn",
                              children: [
                                Object(i.jsx)("i", {
                                  className: "flaticon-user",
                                }),
                                e("view-all-courses"),
                                Object(i.jsx)("span", {}),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              Object(i.jsx)("div", {
                className: "bulb",
                children: Object(i.jsx)("img", {
                  src: "/images/bulb.png",
                  alt: "image",
                }),
              }),
            ],
          });
        },
        O = s("rePB"),
        x = s("ODXe"),
        p = s("Vvt1"),
        f = s.n(p);
      function g(e, t) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          t &&
            (c = c.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            s.push.apply(s, c);
        }
        return s;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(s), !0).forEach(function (t) {
                Object(O.a)(e, t, s[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
            : g(Object(s)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(s, t)
                );
              });
        }
        return e;
      }
      var N = f()(
          function () {
            return s.e(3).then(s.t.bind(null, "Rst5", 7));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return ["Rst5"];
              },
              modules: ["react-owl-carousel3"],
            },
          }
        ),
        y = {
          loop: !0,
          nav: !0,
          dots: !1,
          autoplayHoverPause: !0,
          autoplay: !0,
          animateOut: "fadeOut",
          items: 1,
          navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>",
          ],
        },
        w = function () {
          var e = Object(o.a)("distance-learning").t,
            t = l.a.useState(!1),
            s = Object(x.a)(t, 2),
            c = s[0],
            a = s[1];
          return (
            l.a.useEffect(function () {
              a(!0);
            }, []),
            Object(i.jsx)("div", {
              className: "testimonials-area ptb-100",
              children: Object(i.jsxs)("div", {
                className: "container",
                children: [
                  Object(i.jsxs)("div", {
                    className: "section-title",
                    children: [
                      Object(i.jsx)("span", {
                        className: "sub-title",
                        children: e("testimonials"),
                      }),
                      Object(i.jsx)("h2", { children: e("learning-feedback") }),
                      Object(i.jsx)("p", {
                        children: e("learning-feedback-des"),
                      }),
                    ],
                  }),
                  c
                    ? Object(i.jsxs)(
                        N,
                        v(
                          v(
                            {
                              className:
                                "testimonials-slides-two owl-carousel owl-theme",
                            },
                            y
                          ),
                          {},
                          {
                            children: [
                              Object(i.jsx)("div", {
                                className: "testimonials-item",
                                children: Object(i.jsxs)("div", {
                                  className: "row align-items-center",
                                  children: [
                                    Object(i.jsxs)("div", {
                                      className: "col-lg-8 col-md-12",
                                      children: [
                                        Object(i.jsx)("p", {
                                          children:
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
                                        }),
                                        Object(i.jsx)("h3", {
                                          children: "John Smith",
                                        }),
                                        Object(i.jsx)("span", {
                                          children: "Python Developer",
                                        }),
                                      ],
                                    }),
                                    Object(i.jsx)("div", {
                                      className:
                                        "col-lg-4 col-md-12 text-center",
                                      children: Object(i.jsx)("img", {
                                        src: "/images/user7.png",
                                        alt: "image",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              Object(i.jsx)("div", {
                                className: "testimonials-item",
                                children: Object(i.jsxs)("div", {
                                  className: "row align-items-center",
                                  children: [
                                    Object(i.jsxs)("div", {
                                      className: "col-lg-8 col-md-12",
                                      children: [
                                        Object(i.jsx)("p", {
                                          children:
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
                                        }),
                                        Object(i.jsx)("h3", {
                                          children: "David Malan",
                                        }),
                                        Object(i.jsx)("span", {
                                          children: "Developer",
                                        }),
                                      ],
                                    }),
                                    Object(i.jsx)("div", {
                                      className:
                                        "col-lg-4 col-md-12 text-center",
                                      children: Object(i.jsx)("img", {
                                        src: "/images/user9.png",
                                        alt: "image",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              Object(i.jsx)("div", {
                                className: "testimonials-item",
                                children: Object(i.jsxs)("div", {
                                  className: "row align-items-center",
                                  children: [
                                    Object(i.jsxs)("div", {
                                      className: "col-lg-8 col-md-12",
                                      children: [
                                        Object(i.jsx)("p", {
                                          children:
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
                                        }),
                                        Object(i.jsx)("h3", {
                                          children: "Sarah Taylor",
                                        }),
                                        Object(i.jsx)("span", {
                                          children: "PHP Developer",
                                        }),
                                      ],
                                    }),
                                    Object(i.jsx)("div", {
                                      className:
                                        "col-lg-4 col-md-12 text-center",
                                      children: Object(i.jsx)("img", {
                                        src: "/images/user8.png",
                                        alt: "image",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }
                        )
                      )
                    : "",
                ],
              }),
            })
          );
        },
        P = function () {
          var e = Object(o.a)("distance-learning").t;
          return Object(i.jsxs)("div", {
            className: "get-instant-courses-area-two bg-f9fbff",
            children: [
              Object(i.jsx)("div", {
                className: "container",
                children: Object(i.jsxs)("div", {
                  className: "row align-items-center",
                  children: [
                    Object(i.jsx)("div", {
                      className: "col-lg-7 col-md-12",
                      children: Object(i.jsxs)("div", {
                        className: "get-instant-courses-content-style-two",
                        children: [
                          Object(i.jsx)("span", {
                            className: "sub-title",
                            children: e("instant-access"),
                          }),
                          Object(i.jsx)("h2", {
                            children: e("self-development-course"),
                          }),
                          Object(i.jsx)("p", {
                            children: e("self-development-desc"),
                          }),
                          Object(i.jsx)(d.a, {
                            href: "/authentication",
                            children: Object(i.jsxs)("a", {
                              className: "default-btn",
                              children: [
                                Object(i.jsx)("i", {
                                  className: "flaticon-user",
                                }),
                                e("start-for-free"),
                                Object(i.jsx)("span", {}),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-5 col-md-12",
                      children: Object(i.jsx)("div", {
                        className: "get-instant-courses-image-style-two",
                        children: Object(i.jsx)("img", {
                          src: "/images/setting.png",
                          alt: "image",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              Object(i.jsx)("div", {
                className: "bulb",
                children: Object(i.jsx)("img", {
                  src: "/images/bulb2.png",
                  alt: "image",
                }),
              }),
            ],
          });
        };
      function _(e, t) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          t &&
            (c = c.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            s.push.apply(s, c);
        }
        return s;
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _(Object(s), !0).forEach(function (t) {
                Object(O.a)(e, t, s[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
            : _(Object(s)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(s, t)
                );
              });
        }
        return e;
      }
      var M = f()(
          function () {
            return s.e(3).then(s.t.bind(null, "Rst5", 7));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return ["Rst5"];
              },
              modules: ["react-owl-carousel3"],
            },
          }
        ),
        S = {
          loop: !0,
          nav: !1,
          dots: !1,
          autoplayHoverPause: !0,
          autoplay: !0,
          margin: 30,
          navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>",
          ],
          responsive: {
            0: { items: 2 },
            576: { items: 3 },
            768: { items: 4 },
            1200: { items: 5 },
          },
        },
        C = function () {
          var e = l.a.useState(!1),
            t = Object(x.a)(e, 2),
            s = t[0],
            c = t[1];
          return (
            l.a.useEffect(function () {
              c(!0);
            }, []),
            Object(i.jsx)("div", {
              className: "partner-area ptb-100",
              children: Object(i.jsx)("div", {
                className: "container",
                children: s
                  ? Object(i.jsxs)(
                      M,
                      k(
                        k(
                          {
                            className: "partner-slides owl-carousel owl-theme",
                          },
                          S
                        ),
                        {},
                        {
                          children: [
                            Object(i.jsx)("div", {
                              className: "partner-item",
                              children: Object(i.jsx)("img", {
                                src: "/images/partner/img13.png",
                                alt: "image",
                              }),
                            }),
                            Object(i.jsx)("div", {
                              className: "partner-item",
                              children: Object(i.jsx)("img", {
                                src: "/images/partner/img14.png",
                                alt: "image",
                              }),
                            }),
                            Object(i.jsx)("div", {
                              className: "partner-item",
                              children: Object(i.jsx)("img", {
                                src: "/images/partner/img15.png",
                                alt: "image",
                              }),
                            }),
                            Object(i.jsx)("div", {
                              className: "partner-item",
                              children: Object(i.jsx)("img", {
                                src: "/images/partner/img16.png",
                                alt: "image",
                              }),
                            }),
                            Object(i.jsx)("div", {
                              className: "partner-item",
                              children: Object(i.jsx)("img", {
                                src: "/images/partner/img17.png",
                                alt: "image",
                              }),
                            }),
                          ],
                        }
                      )
                    )
                  : "",
              }),
            })
          );
        },
        E = f()(
          function () {
            return Promise.all([s.e(0), s.e(6), s.e(8)]).then(
              s.t.bind(null, "60Bi", 7)
            );
          },
          {
            loadableGenerated: {
              webpack: function () {
                return ["60Bi"];
              },
              modules: ["react-modal-video"],
            },
          }
        ),
        D = function () {
          var e = l.a.useState(!1),
            t = Object(x.a)(e, 2),
            s = t[0],
            c = t[1];
          l.a.useEffect(function () {
            c(!0);
          }, []);
          var a = l.a.useState(!0),
            n = Object(x.a)(a, 2),
            r = n[0],
            o = n[1];
          return Object(i.jsxs)(i.Fragment, {
            children: [
              Object(i.jsx)("div", {
                className: "video-area",
                children: Object(i.jsx)("div", {
                  className: "container",
                  children: Object(i.jsxs)("div", {
                    className: "video-box mt-0",
                    children: [
                      Object(i.jsx)("div", {
                        className: "image",
                        children: Object(i.jsx)("img", {
                          src: "/images/video-img2.jpg",
                          className: "shadow",
                          alt: "image",
                        }),
                      }),
                      Object(i.jsx)(d.a, {
                        href: "#",
                        children: Object(i.jsx)("a", {
                          onClick: function (e) {
                            e.preventDefault(), o(!r);
                          },
                          className: "video-btn popup-youtube",
                          children: Object(i.jsx)("i", {
                            className: "flaticon-play",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              s
                ? Object(i.jsx)(E, {
                    channel: "youtube",
                    isOpen: !r,
                    videoId: "bk7McNUjWgw",
                    onClose: function () {
                      return o(!r);
                    },
                  })
                : "",
            ],
          });
        },
        A = function () {
          var e = Object(o.a)("distance-learning").t;
          return Object(i.jsx)("div", {
            className: "funfacts-area-three bg-fff8f8 pt-100 pb-70",
            children: Object(i.jsx)("div", {
              className: "container",
              children: Object(i.jsxs)("div", {
                className: "row",
                children: [
                  Object(i.jsx)("div", {
                    className: "col-lg-3 col-md-3 col-sm-3 col-6",
                    children: Object(i.jsx)("div", {
                      className: "funfacts-box",
                      children: Object(i.jsxs)("div", {
                        className: "content",
                        children: [
                          Object(i.jsx)("h3", {
                            children: Object(i.jsx)("span", {
                              className: "odometer",
                              children: "3279",
                            }),
                          }),
                          Object(i.jsx)("p", {
                            children: e("enrolled-learners"),
                          }),
                        ],
                      }),
                    }),
                  }),
                  Object(i.jsx)("div", {
                    className: "col-lg-3 col-md-3 col-sm-3 col-6",
                    children: Object(i.jsx)("div", {
                      className: "funfacts-box",
                      children: Object(i.jsxs)("div", {
                        className: "content",
                        children: [
                          Object(i.jsx)("h3", {
                            children: Object(i.jsx)("span", {
                              className: "odometer",
                              children: "250",
                            }),
                          }),
                          Object(i.jsx)("p", {
                            children: e("online-instructor"),
                          }),
                        ],
                      }),
                    }),
                  }),
                  Object(i.jsx)("div", {
                    className: "col-lg-3 col-md-3 col-sm-3 col-6",
                    children: Object(i.jsx)("div", {
                      className: "funfacts-box",
                      children: Object(i.jsxs)("div", {
                        className: "content",
                        children: [
                          Object(i.jsx)("h3", {
                            children: Object(i.jsx)("span", {
                              className: "odometer",
                              children: "1926",
                            }),
                          }),
                          Object(i.jsx)("p", {
                            children: e("finished-session"),
                          }),
                        ],
                      }),
                    }),
                  }),
                  Object(i.jsx)("div", {
                    className: "col-lg-3 col-md-3 col-sm-3 col-6",
                    children: Object(i.jsx)("div", {
                      className: "funfacts-box",
                      children: Object(i.jsxs)("div", {
                        className: "content",
                        children: [
                          Object(i.jsxs)("h3", {
                            children: [
                              Object(i.jsx)("span", {
                                className: "odometer",
                                children: "100",
                              }),
                              "%",
                            ],
                          }),
                          Object(i.jsx)("p", {
                            children: e("satisfaction-rate"),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        q = function () {
          var e = Object(o.a)("distance-learning").t;
          return Object(i.jsx)("div", {
            className: "blog-area ptb-100",
            children: Object(i.jsxs)("div", {
              className: "container",
              children: [
                Object(i.jsxs)("div", {
                  className: "section-title",
                  children: [
                    Object(i.jsx)("span", {
                      className: "sub-title",
                      children: e("news-and-blog"),
                    }),
                    Object(i.jsx)("h2", { children: e("latest-blog") }),
                    Object(i.jsx)("p", { children: e("latest-blog-desc") }),
                  ],
                }),
                Object(i.jsxs)("div", {
                  className: "row justify-content-center",
                  children: [
                    Object(i.jsx)("div", {
                      className: "col-lg-4 col-md-6",
                      children: Object(i.jsxs)("div", {
                        className: "single-blog-post",
                        children: [
                          Object(i.jsx)("div", {
                            className: "post-image",
                            children: Object(i.jsx)(d.a, {
                              href: "/single-blog-1",
                              children: Object(i.jsx)("a", {
                                className: "d-block",
                                children: Object(i.jsx)("img", {
                                  src: "/images/blog/img16.jpg",
                                  alt: "image",
                                }),
                              }),
                            }),
                          }),
                          Object(i.jsxs)("div", {
                            className: "post-content",
                            children: [
                              Object(i.jsx)(d.a, {
                                href: "#",
                                children: Object(i.jsx)("a", {
                                  className: "category",
                                  children: "Education",
                                }),
                              }),
                              Object(i.jsx)("h3", {
                                children: Object(i.jsx)(d.a, {
                                  href: "/single-blog-1",
                                  children: Object(i.jsx)("a", {
                                    children:
                                      "University Admissions Could Face Emergency Controls",
                                  }),
                                }),
                              }),
                              Object(i.jsxs)("ul", {
                                className:
                                  "post-content-footer d-flex justify-content-between align-items-center",
                                children: [
                                  Object(i.jsx)("li", {
                                    children: Object(i.jsxs)("div", {
                                      className:
                                        "post-author d-flex align-items-center",
                                      children: [
                                        Object(i.jsx)("img", {
                                          src: "/images/user1.jpg",
                                          className: "rounded-circle",
                                          alt: "image",
                                        }),
                                        Object(i.jsx)("span", {
                                          children: "Alex Morgan",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(i.jsxs)("li", {
                                    children: [
                                      Object(i.jsx)("i", {
                                        className: "flaticon-calendar",
                                      }),
                                      " ",
                                      "Feb 22, 2021",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-4 col-md-6",
                      children: Object(i.jsxs)("div", {
                        className: "single-blog-post",
                        children: [
                          Object(i.jsx)("div", {
                            className: "post-image",
                            children: Object(i.jsx)(d.a, {
                              href: "/single-blog-1",
                              children: Object(i.jsx)("a", {
                                className: "d-block",
                                children: Object(i.jsx)("img", {
                                  src: "/images/blog/img17.jpg",
                                  alt: "image",
                                }),
                              }),
                            }),
                          }),
                          Object(i.jsxs)("div", {
                            className: "post-content",
                            children: [
                              Object(i.jsx)(d.a, {
                                href: "#",
                                children: Object(i.jsx)("a", {
                                  className: "category",
                                  children: "Online",
                                }),
                              }),
                              Object(i.jsx)("h3", {
                                children: Object(i.jsx)(d.a, {
                                  href: "/single-blog-1",
                                  children: Object(i.jsx)("a", {
                                    children:
                                      "Online Learning Can Prepare Students For A Fast-Changing",
                                  }),
                                }),
                              }),
                              Object(i.jsxs)("ul", {
                                className:
                                  "post-content-footer d-flex justify-content-between align-items-center",
                                children: [
                                  Object(i.jsx)("li", {
                                    children: Object(i.jsxs)("div", {
                                      className:
                                        "post-author d-flex align-items-center",
                                      children: [
                                        Object(i.jsx)("img", {
                                          src: "/images/user2.jpg",
                                          className: "rounded-circle",
                                          alt: "image",
                                        }),
                                        Object(i.jsx)("span", {
                                          children: "Sarah Taylor",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(i.jsxs)("li", {
                                    children: [
                                      Object(i.jsx)("i", {
                                        className: "flaticon-calendar",
                                      }),
                                      " ",
                                      "Feb 25, 2021",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-4 col-md-6",
                      children: Object(i.jsxs)("div", {
                        className: "single-blog-post",
                        children: [
                          Object(i.jsx)("div", {
                            className: "post-image",
                            children: Object(i.jsx)(d.a, {
                              href: "/single-blog-1",
                              children: Object(i.jsx)("a", {
                                className: "d-block",
                                children: Object(i.jsx)("img", {
                                  src: "/images/blog/img18.jpg",
                                  alt: "image",
                                }),
                              }),
                            }),
                          }),
                          Object(i.jsxs)("div", {
                            className: "post-content",
                            children: [
                              Object(i.jsx)(d.a, {
                                href: "#",
                                children: Object(i.jsx)("a", {
                                  className: "category",
                                  children: "Learning",
                                }),
                              }),
                              Object(i.jsx)("h3", {
                                children: Object(i.jsx)(d.a, {
                                  href: "/single-blog-1",
                                  children: Object(i.jsx)("a", {
                                    children:
                                      "As Learning Moves Online, Trigger Warnings Must Too",
                                  }),
                                }),
                              }),
                              Object(i.jsxs)("ul", {
                                className:
                                  "post-content-footer d-flex justify-content-between align-items-center",
                                children: [
                                  Object(i.jsx)("li", {
                                    children: Object(i.jsxs)("div", {
                                      className:
                                        "post-author d-flex align-items-center",
                                      children: [
                                        Object(i.jsx)("img", {
                                          src: "/images/user3.jpg",
                                          className: "rounded-circle",
                                          alt: "image",
                                        }),
                                        Object(i.jsx)("span", {
                                          children: "David Warner",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(i.jsxs)("li", {
                                    children: [
                                      Object(i.jsx)("i", {
                                        className: "flaticon-calendar",
                                      }),
                                      " ",
                                      "Feb 28, 2021",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-12 col-md-12",
                      children: Object(i.jsx)("div", {
                        className: "blog-post-info",
                        children: Object(i.jsxs)("p", {
                          children: [
                            "Get into details now?\u200b ",
                            " ",
                            Object(i.jsx)(d.a, {
                              href: "/blog-1",
                              children: Object(i.jsx)("a", {
                                children: "View all posts",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        I = function () {
          var e = Object(o.a)("distance-learning").t;
          return Object(i.jsxs)("div", {
            children: [
              Object(i.jsxs)("div", {
                className: "view-all-courses-area-three bg-fff8f8",
                children: [
                  Object(i.jsx)("div", {
                    className: "container",
                    children: Object(i.jsxs)("div", {
                      className: "row align-items-center",
                      children: [
                        Object(i.jsx)("div", {
                          className: "col-lg-6 col-md-12",
                          children: Object(i.jsx)("div", {
                            className: "view-all-courses-image-style-two",
                            children: Object(i.jsx)("img", {
                              src: "/images/strategy.png",
                              alt: "image",
                            }),
                          }),
                        }),
                        Object(i.jsx)("div", {
                          className: "col-lg-6 col-md-12",
                          children: Object(i.jsxs)("div", {
                            className: "view-all-courses-content-style-two",
                            children: [
                              Object(i.jsx)("span", {
                                className: "sub-title",
                                children: e("distance-learning"),
                              }),
                              Object(i.jsx)("h2", { children: e("go-ahead") }),
                              Object(i.jsx)("p", {
                                children: e("go-ahead-desc"),
                              }),
                              Object(i.jsx)(d.a, {
                                href: "/courses-1",
                                children: Object(i.jsxs)("a", {
                                  className: "default-btn",
                                  children: [
                                    Object(i.jsx)("i", {
                                      className: "flaticon-agenda",
                                    }),
                                    e("view-courses"),
                                    Object(i.jsx)("span", {}),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(i.jsx)("div", {
                    className: "bulb",
                    children: Object(i.jsx)("img", {
                      src: "/images/bulb.png",
                      alt: "image",
                    }),
                  }),
                ],
              }),
              Object(i.jsx)("div", {
                className: "premium-access-area-two",
                children: Object(i.jsx)("div", {
                  className: "container",
                  children: Object(i.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                      Object(i.jsx)("div", {
                        className: "col-lg-6 col-md-12",
                        children: Object(i.jsxs)("div", {
                          className: "premium-access-content-style-two",
                          children: [
                            Object(i.jsx)("span", {
                              className: "sub-title",
                              children: e("go-own-pace"),
                            }),
                            Object(i.jsx)("h2", {
                              children: e("unlimited-access"),
                            }),
                            Object(i.jsx)("p", {
                              children: e("unlimited-access-desc"),
                            }),
                            Object(i.jsx)(d.a, {
                              href: "/membership-levels",
                              children: Object(i.jsxs)("a", {
                                className: "default-btn",
                                children: [
                                  Object(i.jsx)("i", {
                                    className: "flaticon-user",
                                  }),
                                  e("get-started-now"),
                                  Object(i.jsx)("span", {}),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(i.jsx)("div", {
                        className: "col-lg-6 col-md-12",
                        children: Object(i.jsx)("div", {
                          className: "premium-access-image-style-two",
                          children: Object(i.jsx)("img", {
                            src: "/images/security.png",
                            alt: "image",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        R = s("vDqi"),
        H = s.n(R),
        T = s("rjN7"),
        F = s("g4pe"),
        L = s.n(F),
        X = function (e) {
          var t = e.title,
            s = e.description,
            c = e.image;
          return Object(i.jsxs)(L.a, {
            children: [
              Object(i.jsx)("title", { children: t }),
              Object(i.jsx)("meta", { name: "description", content: s }),
              Object(i.jsx)("meta", { itemProp: "name", content: t }),
              Object(i.jsx)("meta", { itemProp: "image", content: c }),
            ],
          });
        };
      X.defaultProps = {
        title: "eDemy - React Next.js Education LMS Template",
        description: "eDemy - React Next.js Education LMS Template",
        image:
          "https://res.cloudinary.com/dev-empty/image/upload/v1595838139/vivi/about-img-two.jpg",
      };
      var B = X,
        W = function (e) {
          var t = e.courses,
            s = Object(o.a)("distance-learning").t;
          return Object(i.jsxs)(i.Fragment, {
            children: [
              Object(i.jsx)(B, {
                title: s("pagetitle"),
                description: s("bannersubtitle"),
              }),
              Object(i.jsx)(b, {}),
              Object(i.jsx)(m, {}),
              Object(i.jsx)(u, { courses: t }),
              Object(i.jsx)(h, {}),
              Object(i.jsx)(w, {}),
              Object(i.jsx)(P, {}),
              Object(i.jsx)(C, {}),
              Object(i.jsx)(D, {}),
              Object(i.jsx)(A, {}),
              Object(i.jsx)(q, {}),
              Object(i.jsx)(I, {}),
            ],
          });
        };
      W.getInitialProps = Object(n.a)(
        a.a.mark(function e() {
          var t, s;
          return a.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (t = "".concat(T.a, "/api/v1/courses/homepage-courses")),
                    (e.next = 3),
                    H.a.get(t)
                  );
                case 3:
                  return (s = e.sent), e.abrupt("return", s.data);
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      t.default = W;
    },
    T0f4: function (e, t) {
      function s(t) {
        return (
          (e.exports = s =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          s(t)
        );
      }
      e.exports = s;
    },
    Xuae: function (e, t, s) {
      "use strict";
      var c = s("mPvQ"),
        a = s("/GRZ"),
        n = s("i2R6"),
        i = (s("qXWd"), s("48fX")),
        r = s("tCBg"),
        l = s("T0f4");
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
          var s,
            c = l(e);
          if (t) {
            var a = l(this).constructor;
            s = Reflect.construct(c, arguments, a);
          } else s = c.apply(this, arguments);
          return r(this, s);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var j = s("q1tI"),
        d = (function (e) {
          i(s, e);
          var t = o(s);
          function s(e) {
            var n;
            return (
              a(this, s),
              ((n = t.call(this, e))._hasHeadManager = void 0),
              (n.emitChange = function () {
                n._hasHeadManager &&
                  n.props.headManager.updateHead(
                    n.props.reduceComponentsToState(
                      c(n.props.headManager.mountedInstances),
                      n.props
                    )
                  );
              }),
              (n._hasHeadManager =
                n.props.headManager && n.props.headManager.mountedInstances),
              n
            );
          }
          return (
            n(s, [
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
            s
          );
        })(j.Component);
      t.default = d;
    },
    g4pe: function (e, t, s) {
      e.exports = s("8Kt/");
    },
    kG2m: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    lwAK: function (e, t, s) {
      "use strict";
      var c;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var a = (
        (c = s("q1tI")) && c.__esModule ? c : { default: c }
      ).default.createContext({});
      t.AmpStateContext = a;
    },
    mPvQ: function (e, t, s) {
      var c = s("5fIB"),
        a = s("rlHP"),
        n = s("KckH"),
        i = s("kG2m");
      e.exports = function (e) {
        return c(e) || a(e) || n(e) || i();
      };
    },
    nbPw: function (e, t, s) {
      "use strict";
      s.d(t, "a", function () {
        return l;
      });
      var c = s("q1tI"),
        a = function () {
          return (a =
            Object.assign ||
            function (e) {
              for (var t, s = 1, c = arguments.length; s < c; s++)
                for (var a in (t = arguments[s]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        };
      function n(e, t) {
        if ("string" !== typeof t) return e;
        return function (s, c, n) {
          return e(s, c, a({ ns: t }, n));
        };
      }
      var i = s("8Q/q"),
        r = function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var t, s = 1, c = arguments.length; s < c; s++)
                for (var a in (t = arguments[s]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        };
      function l(e) {
        var t = Object(c.useContext)(i.a);
        return Object(c.useMemo)(
          function () {
            return r(r({}, t), { t: n(t.t, e) });
          },
          [t.lang, e]
        );
      }
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
    rePB: function (e, t, s) {
      "use strict";
      function c(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      s.d(t, "a", function () {
        return c;
      });
    },
    rlHP: function (e, t) {
      e.exports = function (e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    tCBg: function (e, t, s) {
      var c = s("C+bE"),
        a = s("qXWd");
      e.exports = function (e, t) {
        return !t || ("object" !== c(t) && "function" !== typeof t) ? a(e) : t;
      };
    },
    vlRD: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s("RNiq");
        },
      ]);
    },
  },
  [["vlRD", 1, 0, 2, 4, 5]],
]);
