_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [34],
  {
    "/LjO": function (e, s, c) {
      "use strict";
      var t = c("rePB"),
        i = c("nKUr"),
        a = c("ODXe"),
        l = c("q1tI"),
        r = c.n(l),
        n = c("Vvt1");
      function j(e, s) {
        var c = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          s &&
            (t = t.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            c.push.apply(c, t);
        }
        return c;
      }
      function o(e) {
        for (var s = 1; s < arguments.length; s++) {
          var c = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? j(Object(c), !0).forEach(function (s) {
                Object(t.a)(e, s, c[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(c))
            : j(Object(c)).forEach(function (s) {
                Object.defineProperty(
                  e,
                  s,
                  Object.getOwnPropertyDescriptor(c, s)
                );
              });
        }
        return e;
      }
      var d = c.n(n)()(
          function () {
            return c.e(3).then(c.t.bind(null, "Rst5", 7));
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
        b = {
          loop: !0,
          nav: !1,
          dots: !0,
          autoplayHoverPause: !0,
          autoplay: !0,
          margin: 30,
          navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>",
          ],
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 1 },
            992: { items: 2 },
          },
        };
      s.a = function () {
        var e = r.a.useState(!1),
          s = Object(a.a)(e, 2),
          c = s[0],
          t = s[1];
        return (
          r.a.useEffect(function () {
            t(!0);
          }, []),
          Object(i.jsx)("div", {
            className: "advisor-area bg-f9f9f9 ptb-100",
            children: Object(i.jsxs)("div", {
              className: "container",
              children: [
                Object(i.jsxs)("div", {
                  className: "section-title",
                  children: [
                    Object(i.jsx)("span", {
                      className: "sub-title",
                      children: "Instructor",
                    }),
                    Object(i.jsx)("h2", { children: "Course Advisor" }),
                    Object(i.jsx)("p", {
                      children:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    }),
                  ],
                }),
                c
                  ? Object(i.jsxs)(
                      d,
                      o(
                        o(
                          {
                            className: "advisor-slides owl-carousel owl-theme",
                          },
                          b
                        ),
                        {},
                        {
                          children: [
                            Object(i.jsx)("div", {
                              className: "single-advisor-box",
                              children: Object(i.jsxs)("div", {
                                className: "row align-items-center",
                                children: [
                                  Object(i.jsx)("div", {
                                    className: "col-lg-4 col-md-4",
                                    children: Object(i.jsx)("div", {
                                      className: "advisor-image",
                                      children: Object(i.jsx)("img", {
                                        src: "/images/advisor/advisor1.jpg",
                                        alt: "image",
                                      }),
                                    }),
                                  }),
                                  Object(i.jsx)("div", {
                                    className: "col-lg-8 col-md-8",
                                    children: Object(i.jsxs)("div", {
                                      className: "advisor-content",
                                      children: [
                                        Object(i.jsx)("h3", {
                                          children: Object(i.jsx)("a", {
                                            href: "profile.html",
                                            children: "William James",
                                          }),
                                        }),
                                        Object(i.jsx)("span", {
                                          className: "sub-title",
                                          children: "Project Management Expert",
                                        }),
                                        Object(i.jsx)("p", {
                                          children:
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol aliqua.",
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
                                ],
                              }),
                            }),
                            Object(i.jsx)("div", {
                              className: "single-advisor-box",
                              children: Object(i.jsxs)("div", {
                                className: "row align-items-center",
                                children: [
                                  Object(i.jsx)("div", {
                                    className: "col-lg-4 col-md-4",
                                    children: Object(i.jsx)("div", {
                                      className: "advisor-image",
                                      children: Object(i.jsx)("img", {
                                        src: "/images/advisor/advisor2.jpg",
                                        alt: "image",
                                      }),
                                    }),
                                  }),
                                  Object(i.jsx)("div", {
                                    className: "col-lg-8 col-md-8",
                                    children: Object(i.jsxs)("div", {
                                      className: "advisor-content",
                                      children: [
                                        Object(i.jsx)("h3", {
                                          children: Object(i.jsx)("a", {
                                            href: "profile.html",
                                            children: "Sarah Taylor",
                                          }),
                                        }),
                                        Object(i.jsx)("span", {
                                          className: "sub-title",
                                          children: "Agile Project Expert",
                                        }),
                                        Object(i.jsx)("p", {
                                          children:
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol aliqua.",
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
                                ],
                              }),
                            }),
                            Object(i.jsx)("div", {
                              className: "single-advisor-box",
                              children: Object(i.jsxs)("div", {
                                className: "row align-items-center",
                                children: [
                                  Object(i.jsx)("div", {
                                    className: "col-lg-4 col-md-4",
                                    children: Object(i.jsx)("div", {
                                      className: "advisor-image",
                                      children: Object(i.jsx)("img", {
                                        src: "/images/advisor/advisor3.jpg",
                                        alt: "image",
                                      }),
                                    }),
                                  }),
                                  Object(i.jsx)("div", {
                                    className: "col-lg-8 col-md-8",
                                    children: Object(i.jsxs)("div", {
                                      className: "advisor-content",
                                      children: [
                                        Object(i.jsx)("h3", {
                                          children: Object(i.jsx)("a", {
                                            href: "profile.html",
                                            children: "James Andy",
                                          }),
                                        }),
                                        Object(i.jsx)("span", {
                                          className: "sub-title",
                                          children: "QA Project Expert",
                                        }),
                                        Object(i.jsx)("p", {
                                          children:
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol aliqua.",
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
      };
    },
    "3VD9": function (e, s, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about-1",
        function () {
          return c("vTO3");
        },
      ]);
    },
    Ix5F: function (e, s, c) {
      "use strict";
      var t = c("nKUr"),
        i = (c("q1tI"), c("YFqc")),
        a = c.n(i);
      s.a = function (e) {
        var s = e.pageTitle,
          c = e.homePageUrl,
          i = e.homePageText,
          l = e.activePageText;
        return Object(t.jsxs)("div", {
          className: "page-title-area",
          children: [
            Object(t.jsx)("div", {
              className: "container",
              children: Object(t.jsxs)("div", {
                className: "page-title-content",
                children: [
                  Object(t.jsxs)("ul", {
                    children: [
                      Object(t.jsx)("li", {
                        children: Object(t.jsx)(a.a, {
                          href: c,
                          children: Object(t.jsx)("a", { children: i }),
                        }),
                      }),
                      Object(t.jsx)("li", { className: "active", children: l }),
                    ],
                  }),
                  Object(t.jsx)("h2", { children: s }),
                ],
              }),
            }),
            Object(t.jsx)("div", {
              className: "shape9",
              children: Object(t.jsx)("img", {
                src: "/images/shape8.svg",
                alt: "image",
              }),
            }),
          ],
        });
      };
    },
    rePB: function (e, s, c) {
      "use strict";
      function t(e, s, c) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = c),
          e
        );
      }
      c.d(s, "a", function () {
        return t;
      });
    },
    sex0: function (e, s, c) {
      "use strict";
      var t = c("rePB"),
        i = c("nKUr"),
        a = c("ODXe"),
        l = c("q1tI"),
        r = c.n(l),
        n = c("Vvt1");
      function j(e, s) {
        var c = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          s &&
            (t = t.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            c.push.apply(c, t);
        }
        return c;
      }
      function o(e) {
        for (var s = 1; s < arguments.length; s++) {
          var c = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? j(Object(c), !0).forEach(function (s) {
                Object(t.a)(e, s, c[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(c))
            : j(Object(c)).forEach(function (s) {
                Object.defineProperty(
                  e,
                  s,
                  Object.getOwnPropertyDescriptor(c, s)
                );
              });
        }
        return e;
      }
      var d = c.n(n)()(
          function () {
            return c.e(3).then(c.t.bind(null, "Rst5", 7));
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
        b = {
          loop: !0,
          nav: !0,
          margin: 60,
          dots: !1,
          autoplayHoverPause: !0,
          autoplay: !0,
          navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>",
          ],
          responsive: {
            0: { items: 3, margin: 20 },
            600: { items: 3 },
            768: { items: 4, margin: 30 },
            1e3: { items: 6 },
          },
        };
      s.a = function () {
        var e = r.a.useState(!1),
          s = Object(a.a)(e, 2),
          c = s[0],
          t = s[1];
        return (
          r.a.useEffect(function () {
            t(!0);
          }, []),
          Object(i.jsx)("div", {
            className: "partner-area ptb-70",
            children: Object(i.jsx)("div", {
              className: "container",
              children: c
                ? Object(i.jsxs)(
                    d,
                    o(
                      o(
                        { className: "partner-slides owl-carousel owl-theme" },
                        b
                      ),
                      {},
                      {
                        children: [
                          Object(i.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(i.jsx)("img", {
                              src: "/images/partner/partner1.png",
                              alt: "image",
                            }),
                          }),
                          Object(i.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(i.jsx)("img", {
                              src: "/images/partner/partner2.png",
                              alt: "image",
                            }),
                          }),
                          Object(i.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(i.jsx)("img", {
                              src: "/images/partner/partner3.png",
                              alt: "image",
                            }),
                          }),
                          Object(i.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(i.jsx)("img", {
                              src: "/images/partner/partner4.png",
                              alt: "image",
                            }),
                          }),
                          Object(i.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(i.jsx)("img", {
                              src: "/images/partner/partner5.png",
                              alt: "image",
                            }),
                          }),
                          Object(i.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(i.jsx)("img", {
                              src: "/images/partner/partner6.png",
                              alt: "image",
                            }),
                          }),
                          Object(i.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(i.jsx)("img", {
                              src: "/images/partner/partner4.png",
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
      };
    },
    vTO3: function (e, s, c) {
      "use strict";
      c.r(s);
      var t = c("nKUr"),
        i = c("q1tI"),
        a = c.n(i),
        l = c("Ix5F"),
        r = function () {
          return Object(t.jsxs)("div", {
            className: "about-area ptb-100",
            children: [
              Object(t.jsx)("div", {
                className: "container",
                children: Object(t.jsxs)("div", {
                  className: "row align-items-center",
                  children: [
                    Object(t.jsx)("div", {
                      className: "col-lg-6 col-md-12",
                      children: Object(t.jsx)("div", {
                        className: "about-image",
                        children: Object(t.jsxs)("div", {
                          className: "row",
                          children: [
                            Object(t.jsx)("div", {
                              className: "col-lg-6 col-sm-6 col-md-6 col-6",
                              children: Object(t.jsx)("div", {
                                className: "image",
                                children: Object(t.jsx)("img", {
                                  src: "/images/about-img1.png",
                                  alt: "image",
                                }),
                              }),
                            }),
                            Object(t.jsx)("div", {
                              className: "col-lg-6 col-sm-6 col-md-6 col-6",
                              children: Object(t.jsx)("div", {
                                className: "image",
                                children: Object(t.jsx)("img", {
                                  src: "/images/about-img2.png",
                                  alt: "image",
                                }),
                              }),
                            }),
                            Object(t.jsx)("div", {
                              className: "col-lg-6 col-sm-6 col-md-6 col-6",
                              children: Object(t.jsx)("div", {
                                className: "image",
                                children: Object(t.jsx)("img", {
                                  src: "/images/about-img3.png",
                                  alt: "image",
                                }),
                              }),
                            }),
                            Object(t.jsx)("div", {
                              className: "col-lg-6 col-sm-6 col-md-6 col-6",
                              children: Object(t.jsx)("div", {
                                className: "image",
                                children: Object(t.jsx)("img", {
                                  src: "/images/about-img4.png",
                                  alt: "image",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    Object(t.jsx)("div", {
                      className: "col-lg-6 col-md-12",
                      children: Object(t.jsxs)("div", {
                        className: "about-content",
                        children: [
                          Object(t.jsx)("span", {
                            className: "sub-title",
                            children: "DISTANCE LEARNING",
                          }),
                          Object(t.jsx)("h2", {
                            children:
                              "89% of people learning for professional development report career benefits like getting a promotion, starting a new career",
                          }),
                          Object(t.jsx)("p", {
                            children:
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                          }),
                          Object(t.jsx)("p", {
                            children:
                              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                          }),
                          Object(t.jsxs)("ul", {
                            className: "features-list",
                            children: [
                              Object(t.jsx)("li", {
                                children: Object(t.jsxs)("span", {
                                  children: [
                                    Object(t.jsx)("i", {
                                      className: "flaticon-experience",
                                    }),
                                    " Expert Trainers",
                                  ],
                                }),
                              }),
                              Object(t.jsx)("li", {
                                children: Object(t.jsxs)("span", {
                                  children: [
                                    Object(t.jsx)("i", {
                                      className: "flaticon-time-left",
                                    }),
                                    " Lifetime Acces",
                                  ],
                                }),
                              }),
                              Object(t.jsx)("li", {
                                children: Object(t.jsxs)("span", {
                                  children: [
                                    Object(t.jsx)("i", {
                                      className: "flaticon-tutorials",
                                    }),
                                    " Remote Learning",
                                  ],
                                }),
                              }),
                              Object(t.jsx)("li", {
                                children: Object(t.jsxs)("span", {
                                  children: [
                                    Object(t.jsx)("i", {
                                      className: "flaticon-self-growth",
                                    }),
                                    " Self Development",
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              Object(t.jsx)("div", {
                className: "shape1",
                children: Object(t.jsx)("img", {
                  src: "/images/shape1.png",
                  alt: "image",
                }),
              }),
              Object(t.jsx)("div", {
                className: "shape2",
                children: Object(t.jsx)("img", {
                  src: "/images/shape2.png",
                  alt: "image",
                }),
              }),
              Object(t.jsx)("div", {
                className: "shape3",
                children: Object(t.jsx)("img", {
                  src: "/images/shape3.png",
                  alt: "image",
                }),
              }),
              Object(t.jsx)("div", {
                className: "shape4",
                children: Object(t.jsx)("img", {
                  src: "/images/shape4.png",
                  alt: "image",
                }),
              }),
            ],
          });
        },
        n = c("rePB"),
        j = c("ODXe"),
        o = c("YFqc"),
        d = c.n(o),
        b = function () {
          return Object(t.jsx)("div", {
            className: "funfacts-list",
            children: Object(t.jsxs)("div", {
              className: "row",
              children: [
                Object(t.jsx)("div", {
                  className: "col-lg-6 col-md-6 col-sm-6",
                  children: Object(t.jsxs)("div", {
                    className: "single-funfacts-box",
                    children: [
                      Object(t.jsx)("h3", { children: "1,926" }),
                      Object(t.jsx)("p", { children: "Finished Sessions" }),
                    ],
                  }),
                }),
                Object(t.jsx)("div", {
                  className: "col-lg-6 col-md-6 col-sm-6",
                  children: Object(t.jsxs)("div", {
                    className: "single-funfacts-box",
                    children: [
                      Object(t.jsx)("h3", { children: "3,279" }),
                      Object(t.jsx)("p", { children: "Enrolled Learners" }),
                    ],
                  }),
                }),
                Object(t.jsx)("div", {
                  className: "col-lg-6 col-md-6 col-sm-6",
                  children: Object(t.jsxs)("div", {
                    className: "single-funfacts-box",
                    children: [
                      Object(t.jsx)("h3", { children: "250" }),
                      Object(t.jsx)("p", { children: "Online Instructors" }),
                    ],
                  }),
                }),
                Object(t.jsx)("div", {
                  className: "col-lg-6 col-md-6 col-sm-6",
                  children: Object(t.jsxs)("div", {
                    className: "single-funfacts-box",
                    children: [
                      Object(t.jsx)("h3", { children: "100%" }),
                      Object(t.jsx)("p", { children: "Satisfaction Rate" }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        m = c("Vvt1"),
        h = c.n(m),
        O = h()(
          function () {
            return Promise.all([c.e(0), c.e(6), c.e(8)]).then(
              c.t.bind(null, "60Bi", 7)
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
        x = function () {
          var e = a.a.useState(!1),
            s = Object(j.a)(e, 2),
            c = s[0],
            i = s[1];
          a.a.useEffect(function () {
            i(!0);
          }, []);
          var l = a.a.useState(!0),
            r = Object(j.a)(l, 2),
            n = r[0],
            o = r[1];
          return Object(t.jsxs)(a.a.Fragment, {
            children: [
              Object(t.jsxs)("div", {
                className: "video-box",
                children: [
                  Object(t.jsx)("div", {
                    className: "image",
                    children: Object(t.jsx)("img", {
                      src: "/images/video-img1.jpg",
                      className: "shadow",
                      alt: "image",
                    }),
                  }),
                  Object(t.jsx)(d.a, {
                    href: "#play-video",
                    children: Object(t.jsx)("a", {
                      onClick: function (e) {
                        e.preventDefault(), o(!n);
                      },
                      className: "video-btn popup-youtube",
                      children: Object(t.jsx)("i", {
                        className: "flaticon-play",
                      }),
                    }),
                  }),
                  Object(t.jsx)("div", {
                    className: "shape10",
                    children: Object(t.jsx)("img", {
                      src: "/images/shape9.png",
                      alt: "image",
                    }),
                  }),
                ],
              }),
              c
                ? Object(t.jsx)(O, {
                    channel: "youtube",
                    isOpen: !n,
                    videoId: "bk7McNUjWgw",
                    onClose: function () {
                      return o(!n);
                    },
                  })
                : "",
            ],
          });
        };
      function u(e, s) {
        var c = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          s &&
            (t = t.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            c.push.apply(c, t);
        }
        return c;
      }
      function g(e) {
        for (var s = 1; s < arguments.length; s++) {
          var c = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? u(Object(c), !0).forEach(function (s) {
                Object(n.a)(e, s, c[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(c))
            : u(Object(c)).forEach(function (s) {
                Object.defineProperty(
                  e,
                  s,
                  Object.getOwnPropertyDescriptor(c, s)
                );
              });
        }
        return e;
      }
      var p = h()(
          function () {
            return c.e(3).then(c.t.bind(null, "Rst5", 7));
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
        v = {
          loop: !0,
          nav: !1,
          dots: !0,
          autoplayHoverPause: !0,
          autoplay: !0,
          animateOut: "fadeOut",
          items: 1,
          navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>",
          ],
        },
        f = function () {
          var e = a.a.useState(!1),
            s = Object(j.a)(e, 2),
            c = s[0],
            i = s[1];
          return (
            a.a.useEffect(function () {
              i(!0);
            }, []),
            Object(t.jsxs)("div", {
              className: "funfacts-and-feedback-area ptb-100",
              children: [
                Object(t.jsx)("div", {
                  className: "container",
                  children: Object(t.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                      Object(t.jsx)("div", {
                        className: "col-lg-6 col-md-12",
                        children: Object(t.jsxs)("div", {
                          className: "feedback-content",
                          children: [
                            Object(t.jsx)("span", {
                              className: "sub-title",
                              children: "Distance learning",
                            }),
                            Object(t.jsx)("h2", {
                              children:
                                "Flexible Study at Your Own Pace, According to Your Own Needs",
                            }),
                            Object(t.jsx)("p", {
                              children:
                                "With the eDemy, you can study whenever and wherever you choose. We have students in over 175 countries and a global reputation as a pioneer in the field of flexible learning. Our teaching also means, if you travel often or need to relocate, you can continue to study wherever you go.",
                            }),
                            c
                              ? Object(t.jsxs)(
                                  p,
                                  g(
                                    g(
                                      {
                                        className:
                                          "feedback-slides owl-carousel owl-theme",
                                      },
                                      v
                                    ),
                                    {},
                                    {
                                      children: [
                                        Object(t.jsxs)("div", {
                                          className: "single-feedback-item",
                                          children: [
                                            Object(t.jsx)("p", {
                                              children:
                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
                                            }),
                                            Object(t.jsxs)("div", {
                                              className:
                                                "client-info d-flex align-items-center",
                                              children: [
                                                Object(t.jsx)("img", {
                                                  src: "/images/user1.jpg",
                                                  className: "rounded-circle",
                                                  alt: "image",
                                                }),
                                                Object(t.jsxs)("div", {
                                                  className: "title",
                                                  children: [
                                                    Object(t.jsx)("h3", {
                                                      children: "John Smith",
                                                    }),
                                                    Object(t.jsx)("span", {
                                                      children:
                                                        "Python Developer",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        Object(t.jsxs)("div", {
                                          className: "single-feedback-item",
                                          children: [
                                            Object(t.jsx)("p", {
                                              children:
                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
                                            }),
                                            Object(t.jsxs)("div", {
                                              className:
                                                "client-info d-flex align-items-center",
                                              children: [
                                                Object(t.jsx)("img", {
                                                  src: "/images/user2.jpg",
                                                  className: "rounded-circle",
                                                  alt: "image",
                                                }),
                                                Object(t.jsxs)("div", {
                                                  className: "title",
                                                  children: [
                                                    Object(t.jsx)("h3", {
                                                      children: "Sarah Taylor",
                                                    }),
                                                    Object(t.jsx)("span", {
                                                      children: "PHP Developer",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        Object(t.jsxs)("div", {
                                          className: "single-feedback-item",
                                          children: [
                                            Object(t.jsx)("p", {
                                              children:
                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
                                            }),
                                            Object(t.jsxs)("div", {
                                              className:
                                                "client-info d-flex align-items-center",
                                              children: [
                                                Object(t.jsx)("img", {
                                                  src: "/images/user1.jpg",
                                                  className: "rounded-circle",
                                                  alt: "image",
                                                }),
                                                Object(t.jsxs)("div", {
                                                  className: "title",
                                                  children: [
                                                    Object(t.jsx)("h3", {
                                                      children: "David Warner",
                                                    }),
                                                    Object(t.jsx)("span", {
                                                      children: "QA Developer",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }
                                  )
                                )
                              : "",
                            Object(t.jsx)("div", {
                              className: "feedback-info",
                              children: Object(t.jsxs)("p", {
                                children: [
                                  "Not a member yet?\u200b ",
                                  Object(t.jsx)(d.a, {
                                    href: "/profile-authentication",
                                    children: Object(t.jsx)("a", {
                                      children: "Register Now",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(t.jsx)("div", {
                        className: "col-lg-6 col-md-12",
                        children: Object(t.jsx)(b, {}),
                      }),
                      Object(t.jsx)("div", {
                        className: "col-lg-12 col-md-12",
                        children: Object(t.jsx)(x, {}),
                      }),
                    ],
                  }),
                }),
                Object(t.jsx)("div", {
                  className: "shape2",
                  children: Object(t.jsx)("img", {
                    src: "/images/shape2.png",
                    alt: "image",
                  }),
                }),
                Object(t.jsx)("div", {
                  className: "shape3",
                  children: Object(t.jsx)("img", {
                    src: "/images/shape3.png",
                    alt: "image",
                  }),
                }),
                Object(t.jsx)("div", {
                  className: "shape4",
                  children: Object(t.jsx)("img", {
                    src: "/images/shape4.png",
                    alt: "image",
                  }),
                }),
                Object(t.jsx)("div", {
                  className: "shape9",
                  children: Object(t.jsx)("img", {
                    src: "/images/shape8.svg",
                    alt: "image",
                  }),
                }),
              ],
            })
          );
        },
        N = function () {
          return Object(t.jsx)("div", {
            className: "features-area pb-70",
            children: Object(t.jsxs)("div", {
              className: "container",
              children: [
                Object(t.jsxs)("div", {
                  className: "section-title",
                  children: [
                    Object(t.jsx)("span", {
                      className: "sub-title",
                      children: "Education for everyone",
                    }),
                    Object(t.jsx)("h2", {
                      children:
                        "Affordable Online Courses and Learning Opportunities\u200b",
                    }),
                    Object(t.jsx)("p", {
                      children:
                        "Finding your own space and utilize better learning options can result in faster than the traditional ways. Enjoy the beauty of eLearning!",
                    }),
                  ],
                }),
                Object(t.jsxs)("div", {
                  className: "row",
                  children: [
                    Object(t.jsx)("div", {
                      className: "col-lg-3 col-sm-6 col-md-6",
                      children: Object(t.jsxs)("div", {
                        className: "single-features-box",
                        children: [
                          Object(t.jsx)("div", {
                            className: "icon",
                            children: Object(t.jsx)("i", {
                              className: "flaticon-brain-process",
                            }),
                          }),
                          Object(t.jsx)("h3", {
                            children: "Learn the Latest Top Skills",
                          }),
                          Object(t.jsx)("p", {
                            children:
                              "Learning top skills can bring an extra-ordinary outcome in a career.",
                          }),
                          Object(t.jsx)(d.a, {
                            href: "/profile-authentication",
                            children: Object(t.jsx)("a", {
                              className: "link-btn",
                              children: "Start Now!",
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(t.jsx)("div", {
                      className: "col-lg-3 col-sm-6 col-md-6",
                      children: Object(t.jsxs)("div", {
                        className: "single-features-box",
                        children: [
                          Object(t.jsx)("div", {
                            className: "icon",
                            children: Object(t.jsx)("i", {
                              className: "flaticon-computer",
                            }),
                          }),
                          Object(t.jsx)("h3", {
                            children: "Learn in Your Own Pace",
                          }),
                          Object(t.jsx)("p", {
                            children:
                              "Everyone prefers to enjoy learning at their own pace & that gives a great result.",
                          }),
                          Object(t.jsx)(d.a, {
                            href: "/profile-authentication",
                            children: Object(t.jsx)("a", {
                              className: "link-btn",
                              children: "Start Now!",
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(t.jsx)("div", {
                      className: "col-lg-3 col-sm-6 col-md-6",
                      children: Object(t.jsxs)("div", {
                        className: "single-features-box",
                        children: [
                          Object(t.jsx)("div", {
                            className: "icon",
                            children: Object(t.jsx)("i", {
                              className: "flaticon-shield-1",
                            }),
                          }),
                          Object(t.jsx)("h3", {
                            children: "Learn From Industry Experts",
                          }),
                          Object(t.jsx)("p", {
                            children:
                              "Experienced teachers can assist in learning faster with their best approaches!",
                          }),
                          Object(t.jsx)(d.a, {
                            href: "/profile-authentication",
                            children: Object(t.jsx)("a", {
                              className: "link-btn",
                              children: "Start Now!",
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(t.jsx)("div", {
                      className: "col-lg-3 col-sm-6 col-md-6",
                      children: Object(t.jsxs)("div", {
                        className: "single-features-box",
                        children: [
                          Object(t.jsx)("div", {
                            className: "icon",
                            children: Object(t.jsx)("i", {
                              className: "flaticon-world",
                            }),
                          }),
                          Object(t.jsx)("h3", {
                            children: "Enjoy Learning From Anywhere",
                          }),
                          Object(t.jsx)("p", {
                            children:
                              "We are delighted to give you options to enjoy learning from anywhere in the world.",
                          }),
                          Object(t.jsx)(d.a, {
                            href: "/profile-authentication",
                            children: Object(t.jsx)("a", {
                              className: "link-btn",
                              children: "Start Now!",
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
        w = c("/LjO"),
        y = c("sex0"),
        k = function () {
          return Object(t.jsxs)("div", {
            className: "premium-access-area bg-fef8ef ptb-100",
            children: [
              Object(t.jsx)("div", {
                className: "container",
                children: Object(t.jsxs)("div", {
                  className: "premium-access-content",
                  children: [
                    Object(t.jsx)("span", {
                      className: "sub-title",
                      children: "Go at your own pace",
                    }),
                    Object(t.jsx)("h2", {
                      children:
                        "Give their limitless potential unlimited access",
                    }),
                    Object(t.jsx)("p", {
                      children:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    }),
                    Object(t.jsx)(d.a, {
                      href: "/membership-levels",
                      children: Object(t.jsxs)("a", {
                        className: "default-btn",
                        children: [
                          Object(t.jsx)("i", { className: "flaticon-user" }),
                          " Give Premium Access ",
                          Object(t.jsx)("span", {}),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              Object(t.jsx)("div", {
                className: "shape3",
                children: Object(t.jsx)("img", {
                  src: "/images/shape3.png",
                  alt: "image",
                }),
              }),
              Object(t.jsx)("div", {
                className: "shape4",
                children: Object(t.jsx)("img", {
                  src: "/images/shape4.png",
                  alt: "image",
                }),
              }),
              Object(t.jsx)("div", {
                className: "shape8",
                children: Object(t.jsx)("img", {
                  src: "/images/shape7.png",
                  alt: "image",
                }),
              }),
            ],
          });
        };
      s.default = function () {
        return Object(t.jsxs)(a.a.Fragment, {
          children: [
            Object(t.jsx)(l.a, {
              pageTitle: "About Us",
              homePageUrl: "/",
              homePageText: "Home",
              activePageText: "About Us",
            }),
            Object(t.jsx)(r, {}),
            Object(t.jsx)(f, {}),
            Object(t.jsx)(N, {}),
            Object(t.jsx)(w.a, {}),
            Object(t.jsx)(k, {}),
            Object(t.jsx)(y.a, {}),
          ],
        });
      };
    },
  },
  [["3VD9", 1, 0, 2, 4]],
]);
