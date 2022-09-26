_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [54],
  {
    Ix5F: function (e, s, c) {
      "use strict";
      var i = c("nKUr"),
        a = (c("q1tI"), c("YFqc")),
        t = c.n(a);
      s.a = function (e) {
        var s = e.pageTitle,
          c = e.homePageUrl,
          a = e.homePageText,
          l = e.activePageText;
        return Object(i.jsxs)("div", {
          className: "page-title-area",
          children: [
            Object(i.jsx)("div", {
              className: "container",
              children: Object(i.jsxs)("div", {
                className: "page-title-content",
                children: [
                  Object(i.jsxs)("ul", {
                    children: [
                      Object(i.jsx)("li", {
                        children: Object(i.jsx)(t.a, {
                          href: c,
                          children: Object(i.jsx)("a", { children: a }),
                        }),
                      }),
                      Object(i.jsx)("li", { className: "active", children: l }),
                    ],
                  }),
                  Object(i.jsx)("h2", { children: s }),
                ],
              }),
            }),
            Object(i.jsx)("div", {
              className: "shape9",
              children: Object(i.jsx)("img", {
                src: "/images/shape8.svg",
                alt: "image",
              }),
            }),
          ],
        });
      };
    },
    UCIj: function (e, s, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/courses-3",
        function () {
          return c("r6+A");
        },
      ]);
    },
    YFqc: function (e, s, c) {
      e.exports = c("cTJO");
    },
    cTJO: function (e, s, c) {
      "use strict";
      var i = c("zoAU"),
        a = c("7KCV");
      (s.__esModule = !0), (s.default = void 0);
      var t = a(c("q1tI")),
        l = c("elyg"),
        r = c("nOHt"),
        n = c("vNVm"),
        o = {};
      function j(e, s, c, i) {
        if (e && (0, l.isLocalURL)(s)) {
          e.prefetch(s, c, i).catch(function (e) {
            0;
          });
          var a =
            i && "undefined" !== typeof i.locale ? i.locale : e && e.locale;
          o[s + "%" + c + (a ? "%" + a : "")] = !0;
        }
      }
      var d = function (e) {
        var s = !1 !== e.prefetch,
          c = (0, r.useRouter)(),
          a = (c && c.pathname) || "/",
          d = t.default.useMemo(
            function () {
              var s = (0, l.resolveHref)(a, e.href, !0),
                c = i(s, 2),
                t = c[0],
                r = c[1];
              return {
                href: t,
                as: e.as ? (0, l.resolveHref)(a, e.as) : r || t,
              };
            },
            [a, e.href, e.as]
          ),
          m = d.href,
          b = d.as,
          h = e.children,
          x = e.replace,
          u = e.shallow,
          O = e.scroll,
          g = e.locale;
        "string" === typeof h && (h = t.default.createElement("a", null, h));
        var f = t.Children.only(h),
          p = f && "object" === typeof f && f.ref,
          N = (0, n.useIntersection)({ rootMargin: "200px" }),
          v = i(N, 2),
          y = v[0],
          w = v[1],
          L = t.default.useCallback(
            function (e) {
              y(e),
                p &&
                  ("function" === typeof p
                    ? p(e)
                    : "object" === typeof p && (p.current = e));
            },
            [p, y]
          );
        (0, t.useEffect)(
          function () {
            var e = w && s && (0, l.isLocalURL)(m),
              i = "undefined" !== typeof g ? g : c && c.locale,
              a = o[m + "%" + b + (i ? "%" + i : "")];
            e && !a && j(c, m, b, { locale: i });
          },
          [b, m, w, g, s, c]
        );
        var S = {
          ref: L,
          onClick: function (e) {
            f.props &&
              "function" === typeof f.props.onClick &&
              f.props.onClick(e),
              e.defaultPrevented ||
                (function (e, s, c, i, a, t, r, n) {
                  ("A" !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var s = e.currentTarget.target;
                      return (
                        (s && "_self" !== s) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      (0, l.isLocalURL)(c))) &&
                    (e.preventDefault(),
                    null == r && (r = i.indexOf("#") < 0),
                    s[a ? "replace" : "push"](c, i, {
                      shallow: t,
                      locale: n,
                      scroll: r,
                    }).then(function (e) {
                      e && r && document.body.focus();
                    }));
                })(e, c, m, b, x, u, O, g);
          },
          onMouseEnter: function (e) {
            (0, l.isLocalURL)(m) &&
              (f.props &&
                "function" === typeof f.props.onMouseEnter &&
                f.props.onMouseEnter(e),
              j(c, m, b, { priority: !0 }));
          },
        };
        if (e.passHref || ("a" === f.type && !("href" in f.props))) {
          var k = "undefined" !== typeof g ? g : c && c.locale,
            A = (0, l.getDomainLocale)(
              b,
              k,
              c && c.locales,
              c && c.domainLocales
            );
          S.href =
            A ||
            (0, l.addBasePath)((0, l.addLocale)(b, k, c && c.defaultLocale));
        }
        return t.default.cloneElement(f, S);
      };
      s.default = d;
    },
    "r6+A": function (e, s, c) {
      "use strict";
      c.r(s);
      var i = c("nKUr"),
        a = c("q1tI"),
        t = c.n(a),
        l = c("Ix5F"),
        r = c("YFqc"),
        n = c.n(r);
      s.default = function () {
        return Object(i.jsxs)(t.a.Fragment, {
          children: [
            Object(i.jsx)(l.a, {
              pageTitle: "Courses Grid 03",
              homePageUrl: "/",
              homePageText: "Home",
              activePageText: "Courses Grid 03",
            }),
            Object(i.jsx)("div", {
              className: "courses-area courses-section pt-100 pb-70",
              children: Object(i.jsxs)("div", {
                className: "container",
                children: [
                  Object(i.jsxs)("div", {
                    className: "edemy-grid-sorting row align-items-center",
                    children: [
                      Object(i.jsx)("div", {
                        className: "col-lg-8 col-md-6 result-count",
                        children: Object(i.jsxs)("p", {
                          children: [
                            "We found ",
                            Object(i.jsx)("span", {
                              className: "count",
                              children: "12",
                            }),
                            " courses available for you",
                          ],
                        }),
                      }),
                      Object(i.jsx)("div", {
                        className: "col-lg-4 col-md-6 ordering",
                        children: Object(i.jsx)("div", {
                          className: "select-box",
                          children: Object(i.jsxs)("select", {
                            className: "form-control",
                            children: [
                              Object(i.jsx)("option", { children: "Sort By" }),
                              Object(i.jsx)("option", {
                                children: "Popularity",
                              }),
                              Object(i.jsx)("option", { children: "Latest" }),
                              Object(i.jsx)("option", {
                                children: "Price: low to high",
                              }),
                              Object(i.jsx)("option", {
                                children: "Price: high to low",
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  Object(i.jsxs)("div", {
                    className: "row",
                    children: [
                      Object(i.jsx)("div", {
                        className: "col-lg-4 col-md-6",
                        children: Object(i.jsxs)("div", {
                          className: "single-courses-box bg-color",
                          children: [
                            Object(i.jsxs)("div", {
                              className: "courses-image",
                              children: [
                                Object(i.jsx)(n.a, {
                                  href: "/single-courses-1",
                                  children: Object(i.jsx)("a", {
                                    className: "d-block image",
                                    children: Object(i.jsx)("img", {
                                      src: "/images/courses/courses1.jpg",
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("a", {
                                  href: "#",
                                  className: "fav",
                                  children: Object(i.jsx)("i", {
                                    className: "flaticon-heart",
                                  }),
                                }),
                                Object(i.jsx)("div", {
                                  className: "price shadow",
                                  children: "$39",
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
                                      src: "/images/user1.jpg",
                                      className: "rounded-circle",
                                      alt: "image",
                                    }),
                                    Object(i.jsx)("span", {
                                      children: "Alex Morgan",
                                    }),
                                  ],
                                }),
                                Object(i.jsx)("h3", {
                                  children: Object(i.jsx)(n.a, {
                                    href: "/single-courses-1",
                                    children: Object(i.jsx)("a", {
                                      children:
                                        "The Data Science Course 2020: Complete Data Science Bootcamp",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
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
                                        " 15 Lessons",
                                      ],
                                    }),
                                    Object(i.jsxs)("li", {
                                      children: [
                                        Object(i.jsx)("i", {
                                          className: "flaticon-people",
                                        }),
                                        " 145 Students",
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
                          className: "single-courses-box bg-color",
                          children: [
                            Object(i.jsxs)("div", {
                              className: "courses-image",
                              children: [
                                Object(i.jsx)(n.a, {
                                  href: "/single-courses-1",
                                  children: Object(i.jsx)("a", {
                                    className: "d-block image",
                                    children: Object(i.jsx)("img", {
                                      src: "/images/courses/courses2.jpg",
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("a", {
                                  href: "#",
                                  className: "fav",
                                  children: Object(i.jsx)("i", {
                                    className: "flaticon-heart",
                                  }),
                                }),
                                Object(i.jsx)("div", {
                                  className: "price shadow",
                                  children: "$49",
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
                                      src: "/images/user2.jpg",
                                      className: "rounded-circle",
                                      alt: "image",
                                    }),
                                    Object(i.jsx)("span", {
                                      children: "Sarah Taylor",
                                    }),
                                  ],
                                }),
                                Object(i.jsx)("h3", {
                                  children: Object(i.jsx)(n.a, {
                                    href: "/single-courses-1",
                                    children: Object(i.jsx)("a", {
                                      children:
                                        "Java Programming MasterclassName for Software Developers",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
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
                                        " 20 Lessons",
                                      ],
                                    }),
                                    Object(i.jsxs)("li", {
                                      children: [
                                        Object(i.jsx)("i", {
                                          className: "flaticon-people",
                                        }),
                                        " 100 Students",
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
                          className: "single-courses-box bg-color",
                          children: [
                            Object(i.jsxs)("div", {
                              className: "courses-image",
                              children: [
                                Object(i.jsx)(n.a, {
                                  href: "/single-courses-1",
                                  children: Object(i.jsx)("a", {
                                    className: "d-block image",
                                    children: Object(i.jsx)("img", {
                                      src: "/images/courses/courses3.jpg",
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("a", {
                                  href: "#",
                                  className: "fav",
                                  children: Object(i.jsx)("i", {
                                    className: "flaticon-heart",
                                  }),
                                }),
                                Object(i.jsx)("div", {
                                  className: "price shadow",
                                  children: "$59",
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
                                      src: "/images/user3.jpg",
                                      className: "rounded-circle",
                                      alt: "image",
                                    }),
                                    Object(i.jsx)("span", {
                                      children: "David Warner",
                                    }),
                                  ],
                                }),
                                Object(i.jsx)("h3", {
                                  children: Object(i.jsx)(n.a, {
                                    href: "/single-courses-1",
                                    children: Object(i.jsx)("a", {
                                      children:
                                        "Deep Learning A-Z\u2122: Hands-On Artificial Neural Networks",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
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
                                        " 20 Lessons",
                                      ],
                                    }),
                                    Object(i.jsxs)("li", {
                                      children: [
                                        Object(i.jsx)("i", {
                                          className: "flaticon-people",
                                        }),
                                        " 150 Students",
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
                          className: "single-courses-box bg-color",
                          children: [
                            Object(i.jsxs)("div", {
                              className: "courses-image",
                              children: [
                                Object(i.jsx)(n.a, {
                                  href: "/single-courses-1",
                                  children: Object(i.jsx)("a", {
                                    className: "d-block image",
                                    children: Object(i.jsx)("img", {
                                      src: "/images/courses/courses4.jpg",
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("a", {
                                  href: "#",
                                  className: "fav",
                                  children: Object(i.jsx)("i", {
                                    className: "flaticon-heart",
                                  }),
                                }),
                                Object(i.jsx)("div", {
                                  className: "price shadow",
                                  children: "$39",
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
                                      src: "/images/user6.jpg",
                                      className: "rounded-circle",
                                      alt: "image",
                                    }),
                                    Object(i.jsx)("span", {
                                      children: "Alex Morgan",
                                    }),
                                  ],
                                }),
                                Object(i.jsx)("h3", {
                                  children: Object(i.jsx)(n.a, {
                                    href: "/single-courses-1",
                                    children: Object(i.jsx)("a", {
                                      children:
                                        "Python for Finance: Investment Fundamentals & Data Analytics",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
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
                                        " 15 Lessons",
                                      ],
                                    }),
                                    Object(i.jsxs)("li", {
                                      children: [
                                        Object(i.jsx)("i", {
                                          className: "flaticon-people",
                                        }),
                                        " 145 Students",
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
                          className: "single-courses-box bg-color",
                          children: [
                            Object(i.jsxs)("div", {
                              className: "courses-image",
                              children: [
                                Object(i.jsx)(n.a, {
                                  href: "/single-courses-1",
                                  children: Object(i.jsx)("a", {
                                    className: "d-block image",
                                    children: Object(i.jsx)("img", {
                                      src: "/images/courses/courses5.jpg",
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("a", {
                                  href: "#",
                                  className: "fav",
                                  children: Object(i.jsx)("i", {
                                    className: "flaticon-heart",
                                  }),
                                }),
                                Object(i.jsx)("div", {
                                  className: "price shadow",
                                  children: "$49",
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
                                      src: "/images/user5.jpg",
                                      className: "rounded-circle",
                                      alt: "image",
                                    }),
                                    Object(i.jsx)("span", {
                                      children: "Sarah Taylor",
                                    }),
                                  ],
                                }),
                                Object(i.jsx)("h3", {
                                  children: Object(i.jsx)(n.a, {
                                    href: "/single-courses-1",
                                    children: Object(i.jsx)("a", {
                                      children:
                                        "Machine Learning A-Z\u2122: Hands-On Python & R In Data Science",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
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
                                        " 20 Lessons",
                                      ],
                                    }),
                                    Object(i.jsxs)("li", {
                                      children: [
                                        Object(i.jsx)("i", {
                                          className: "flaticon-people",
                                        }),
                                        " 100 Students",
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
                          className: "single-courses-box bg-color",
                          children: [
                            Object(i.jsxs)("div", {
                              className: "courses-image",
                              children: [
                                Object(i.jsx)(n.a, {
                                  href: "/single-courses-1",
                                  children: Object(i.jsx)("a", {
                                    className: "d-block image",
                                    children: Object(i.jsx)("img", {
                                      src: "/images/courses/courses6.jpg",
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("a", {
                                  href: "#",
                                  className: "fav",
                                  children: Object(i.jsx)("i", {
                                    className: "flaticon-heart",
                                  }),
                                }),
                                Object(i.jsx)("div", {
                                  className: "price shadow",
                                  children: "$99",
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
                                      src: "/images/user4.jpg",
                                      className: "rounded-circle",
                                      alt: "image",
                                    }),
                                    Object(i.jsx)("span", {
                                      children: "James Anderson",
                                    }),
                                  ],
                                }),
                                Object(i.jsx)("h3", {
                                  children: Object(i.jsx)(n.a, {
                                    href: "/single-courses-1",
                                    children: Object(i.jsx)("a", {
                                      children:
                                        "R Programming A-Z\u2122: R For Data Science With Real Exercises!",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
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
                                        " 44 Lessons",
                                      ],
                                    }),
                                    Object(i.jsxs)("li", {
                                      children: [
                                        Object(i.jsx)("i", {
                                          className: "flaticon-people",
                                        }),
                                        " 440 Students",
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
                          className: "single-courses-box bg-color",
                          children: [
                            Object(i.jsxs)("div", {
                              className: "courses-image",
                              children: [
                                Object(i.jsx)(n.a, {
                                  href: "/single-courses-1",
                                  children: Object(i.jsx)("a", {
                                    className: "d-block image",
                                    children: Object(i.jsx)("img", {
                                      src: "/images/courses/courses10.jpg",
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("a", {
                                  href: "#",
                                  className: "fav",
                                  children: Object(i.jsx)("i", {
                                    className: "flaticon-heart",
                                  }),
                                }),
                                Object(i.jsx)("div", {
                                  className: "price shadow",
                                  children: "$39",
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
                                      src: "/images/user1.jpg",
                                      className: "rounded-circle",
                                      alt: "image",
                                    }),
                                    Object(i.jsx)("span", {
                                      children: "Alex Morgan",
                                    }),
                                  ],
                                }),
                                Object(i.jsx)("h3", {
                                  children: Object(i.jsx)(n.a, {
                                    href: "/single-courses-1",
                                    children: Object(i.jsx)("a", {
                                      children:
                                        "Deep Learning The Numpy Stack in Python",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
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
                                        " 15 Lessons",
                                      ],
                                    }),
                                    Object(i.jsxs)("li", {
                                      children: [
                                        Object(i.jsx)("i", {
                                          className: "flaticon-people",
                                        }),
                                        " 145 Students",
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
                          className: "single-courses-box bg-color",
                          children: [
                            Object(i.jsxs)("div", {
                              className: "courses-image",
                              children: [
                                Object(i.jsx)(n.a, {
                                  href: "/single-courses-1",
                                  children: Object(i.jsx)("a", {
                                    className: "d-block image",
                                    children: Object(i.jsx)("img", {
                                      src: "/images/courses/courses11.jpg",
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("a", {
                                  href: "#",
                                  className: "fav",
                                  children: Object(i.jsx)("i", {
                                    className: "flaticon-heart",
                                  }),
                                }),
                                Object(i.jsx)("div", {
                                  className: "price shadow",
                                  children: "$49",
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
                                      src: "/images/user2.jpg",
                                      className: "rounded-circle",
                                      alt: "image",
                                    }),
                                    Object(i.jsx)("span", {
                                      children: "Sarah Taylor",
                                    }),
                                  ],
                                }),
                                Object(i.jsx)("h3", {
                                  children: Object(i.jsx)(n.a, {
                                    href: "/single-courses-1",
                                    children: Object(i.jsx)("a", {
                                      children:
                                        "Statistics for Data Science and Business Analysis",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
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
                                        " 20 Lessons",
                                      ],
                                    }),
                                    Object(i.jsxs)("li", {
                                      children: [
                                        Object(i.jsx)("i", {
                                          className: "flaticon-people",
                                        }),
                                        " 100 Students",
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
                          className: "single-courses-box bg-color",
                          children: [
                            Object(i.jsxs)("div", {
                              className: "courses-image",
                              children: [
                                Object(i.jsx)(n.a, {
                                  href: "/single-courses-1",
                                  children: Object(i.jsx)("a", {
                                    className: "d-block image",
                                    children: Object(i.jsx)("img", {
                                      src: "/images/courses/courses12.jpg",
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("a", {
                                  href: "#",
                                  className: "fav",
                                  children: Object(i.jsx)("i", {
                                    className: "flaticon-heart",
                                  }),
                                }),
                                Object(i.jsx)("div", {
                                  className: "price shadow",
                                  children: "$59",
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
                                      src: "/images/user3.jpg",
                                      className: "rounded-circle",
                                      alt: "image",
                                    }),
                                    Object(i.jsx)("span", {
                                      children: "David Warner",
                                    }),
                                  ],
                                }),
                                Object(i.jsx)("h3", {
                                  children: Object(i.jsx)(n.a, {
                                    href: "/single-courses-1",
                                    children: Object(i.jsx)("a", {
                                      children:
                                        "Microsoft Excel - Excel from Beginner to Advanced",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
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
                                        " 20 Lessons",
                                      ],
                                    }),
                                    Object(i.jsxs)("li", {
                                      children: [
                                        Object(i.jsx)("i", {
                                          className: "flaticon-people",
                                        }),
                                        " 150 Students",
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
                          className: "single-courses-box bg-color",
                          children: [
                            Object(i.jsxs)("div", {
                              className: "courses-image",
                              children: [
                                Object(i.jsx)(n.a, {
                                  href: "/single-courses-1",
                                  children: Object(i.jsx)("a", {
                                    className: "d-block image",
                                    children: Object(i.jsx)("img", {
                                      src: "/images/courses/courses13.jpg",
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("a", {
                                  href: "#",
                                  className: "fav",
                                  children: Object(i.jsx)("i", {
                                    className: "flaticon-heart",
                                  }),
                                }),
                                Object(i.jsx)("div", {
                                  className: "price shadow",
                                  children: "$39",
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
                                      src: "/images/user6.jpg",
                                      className: "rounded-circle",
                                      alt: "image",
                                    }),
                                    Object(i.jsx)("span", {
                                      children: "Alex Morgan",
                                    }),
                                  ],
                                }),
                                Object(i.jsx)("h3", {
                                  children: Object(i.jsx)(n.a, {
                                    href: "/single-courses-1",
                                    children: Object(i.jsx)("a", {
                                      children:
                                        "Python Django Web Development: To-Do App",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
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
                                        " 15 Lessons",
                                      ],
                                    }),
                                    Object(i.jsxs)("li", {
                                      children: [
                                        Object(i.jsx)("i", {
                                          className: "flaticon-people",
                                        }),
                                        " 145 Students",
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
                          className: "single-courses-box bg-color",
                          children: [
                            Object(i.jsxs)("div", {
                              className: "courses-image",
                              children: [
                                Object(i.jsx)(n.a, {
                                  href: "/single-courses-1",
                                  children: Object(i.jsx)("a", {
                                    className: "d-block image",
                                    children: Object(i.jsx)("img", {
                                      src: "/images/courses/courses14.jpg",
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("a", {
                                  href: "#",
                                  className: "fav",
                                  children: Object(i.jsx)("i", {
                                    className: "flaticon-heart",
                                  }),
                                }),
                                Object(i.jsx)("div", {
                                  className: "price shadow",
                                  children: "$49",
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
                                      src: "/images/user5.jpg",
                                      className: "rounded-circle",
                                      alt: "image",
                                    }),
                                    Object(i.jsx)("span", {
                                      children: "Sarah Taylor",
                                    }),
                                  ],
                                }),
                                Object(i.jsx)("h3", {
                                  children: Object(i.jsx)(n.a, {
                                    href: "/single-courses-1",
                                    children: Object(i.jsx)("a", {
                                      children:
                                        "Oracle SQL Developer : Essentials, Tips and Tricks",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
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
                                        " 20 Lessons",
                                      ],
                                    }),
                                    Object(i.jsxs)("li", {
                                      children: [
                                        Object(i.jsx)("i", {
                                          className: "flaticon-people",
                                        }),
                                        " 100 Students",
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
                          className: "single-courses-box bg-color",
                          children: [
                            Object(i.jsxs)("div", {
                              className: "courses-image",
                              children: [
                                Object(i.jsx)(n.a, {
                                  href: "/single-courses-1",
                                  children: Object(i.jsx)("a", {
                                    className: "d-block image",
                                    children: Object(i.jsx)("img", {
                                      src: "/images/courses/courses15.jpg",
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("a", {
                                  href: "#",
                                  className: "fav",
                                  children: Object(i.jsx)("i", {
                                    className: "flaticon-heart",
                                  }),
                                }),
                                Object(i.jsx)("div", {
                                  className: "price shadow",
                                  children: "$99",
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
                                      src: "/images/user4.jpg",
                                      className: "rounded-circle",
                                      alt: "image",
                                    }),
                                    Object(i.jsx)("span", {
                                      children: "James Anderson",
                                    }),
                                  ],
                                }),
                                Object(i.jsx)("h3", {
                                  children: Object(i.jsx)(n.a, {
                                    href: "/single-courses-1",
                                    children: Object(i.jsx)("a", {
                                      children:
                                        "Learning A-Z\u2122: Hands-On Python In Data Science",
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
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
                                        " 44 Lessons",
                                      ],
                                    }),
                                    Object(i.jsxs)("li", {
                                      children: [
                                        Object(i.jsx)("i", {
                                          className: "flaticon-people",
                                        }),
                                        " 440 Students",
                                      ],
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
                ],
              }),
            }),
          ],
        });
      };
    },
    vNVm: function (e, s, c) {
      "use strict";
      var i = c("zoAU"),
        a = c("AroE");
      (s.__esModule = !0),
        (s.useIntersection = function (e) {
          var s = e.rootMargin,
            c = e.disabled || !r,
            a = (0, t.useRef)(),
            o = (0, t.useState)(!1),
            j = i(o, 2),
            d = j[0],
            m = j[1],
            b = (0, t.useCallback)(
              function (e) {
                a.current && (a.current(), (a.current = void 0)),
                  c ||
                    d ||
                    (e &&
                      e.tagName &&
                      (a.current = (function (e, s, c) {
                        var i = (function (e) {
                            var s = e.rootMargin || "",
                              c = n.get(s);
                            if (c) return c;
                            var i = new Map(),
                              a = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var s = i.get(e.target),
                                    c =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  s && c && s(c);
                                });
                              }, e);
                            return (
                              n.set(
                                s,
                                (c = { id: s, observer: a, elements: i })
                              ),
                              c
                            );
                          })(c),
                          a = i.id,
                          t = i.observer,
                          l = i.elements;
                        return (
                          l.set(e, s),
                          t.observe(e),
                          function () {
                            l.delete(e),
                              t.unobserve(e),
                              0 === l.size && (t.disconnect(), n.delete(a));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && m(e);
                        },
                        { rootMargin: s }
                      )));
              },
              [c, s, d]
            );
          return (
            (0, t.useEffect)(
              function () {
                r ||
                  d ||
                  (0, l.default)(function () {
                    return m(!0);
                  });
              },
              [d]
            ),
            [b, d]
          );
        });
      var t = c("q1tI"),
        l = a(c("0G5g")),
        r = "undefined" !== typeof IntersectionObserver;
      var n = new Map();
    },
  },
  [["UCIj", 1, 0, 2]],
]);
