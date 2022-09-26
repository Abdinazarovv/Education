_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [35],
  {
    "/LjO": function (e, s, t) {
      "use strict";
      var c = t("rePB"),
        a = t("nKUr"),
        i = t("ODXe"),
        r = t("q1tI"),
        l = t.n(r),
        n = t("Vvt1");
      function j(e, s) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          s &&
            (c = c.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            t.push.apply(t, c);
        }
        return t;
      }
      function o(e) {
        for (var s = 1; s < arguments.length; s++) {
          var t = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? j(Object(t), !0).forEach(function (s) {
                Object(c.a)(e, s, t[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (s) {
                Object.defineProperty(
                  e,
                  s,
                  Object.getOwnPropertyDescriptor(t, s)
                );
              });
        }
        return e;
      }
      var d = t.n(n)()(
          function () {
            return t.e(3).then(t.t.bind(null, "Rst5", 7));
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
        m = {
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
        var e = l.a.useState(!1),
          s = Object(i.a)(e, 2),
          t = s[0],
          c = s[1];
        return (
          l.a.useEffect(function () {
            c(!0);
          }, []),
          Object(a.jsx)("div", {
            className: "advisor-area bg-f9f9f9 ptb-100",
            children: Object(a.jsxs)("div", {
              className: "container",
              children: [
                Object(a.jsxs)("div", {
                  className: "section-title",
                  children: [
                    Object(a.jsx)("span", {
                      className: "sub-title",
                      children: "Instructor",
                    }),
                    Object(a.jsx)("h2", { children: "Course Advisor" }),
                    Object(a.jsx)("p", {
                      children:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    }),
                  ],
                }),
                t
                  ? Object(a.jsxs)(
                      d,
                      o(
                        o(
                          {
                            className: "advisor-slides owl-carousel owl-theme",
                          },
                          m
                        ),
                        {},
                        {
                          children: [
                            Object(a.jsx)("div", {
                              className: "single-advisor-box",
                              children: Object(a.jsxs)("div", {
                                className: "row align-items-center",
                                children: [
                                  Object(a.jsx)("div", {
                                    className: "col-lg-4 col-md-4",
                                    children: Object(a.jsx)("div", {
                                      className: "advisor-image",
                                      children: Object(a.jsx)("img", {
                                        src: "/images/advisor/advisor1.jpg",
                                        alt: "image",
                                      }),
                                    }),
                                  }),
                                  Object(a.jsx)("div", {
                                    className: "col-lg-8 col-md-8",
                                    children: Object(a.jsxs)("div", {
                                      className: "advisor-content",
                                      children: [
                                        Object(a.jsx)("h3", {
                                          children: Object(a.jsx)("a", {
                                            href: "profile.html",
                                            children: "William James",
                                          }),
                                        }),
                                        Object(a.jsx)("span", {
                                          className: "sub-title",
                                          children: "Project Management Expert",
                                        }),
                                        Object(a.jsx)("p", {
                                          children:
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol aliqua.",
                                        }),
                                        Object(a.jsxs)("ul", {
                                          className: "social-link",
                                          children: [
                                            Object(a.jsx)("li", {
                                              children: Object(a.jsx)("a", {
                                                href: "#",
                                                className: "d-block",
                                                target: "_blank",
                                                children: Object(a.jsx)("i", {
                                                  className: "bx bxl-facebook",
                                                }),
                                              }),
                                            }),
                                            Object(a.jsx)("li", {
                                              children: Object(a.jsx)("a", {
                                                href: "#",
                                                className: "d-block",
                                                target: "_blank",
                                                children: Object(a.jsx)("i", {
                                                  className: "bx bxl-twitter",
                                                }),
                                              }),
                                            }),
                                            Object(a.jsx)("li", {
                                              children: Object(a.jsx)("a", {
                                                href: "#",
                                                className: "d-block",
                                                target: "_blank",
                                                children: Object(a.jsx)("i", {
                                                  className: "bx bxl-instagram",
                                                }),
                                              }),
                                            }),
                                            Object(a.jsx)("li", {
                                              children: Object(a.jsx)("a", {
                                                href: "#",
                                                className: "d-block",
                                                target: "_blank",
                                                children: Object(a.jsx)("i", {
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
                            Object(a.jsx)("div", {
                              className: "single-advisor-box",
                              children: Object(a.jsxs)("div", {
                                className: "row align-items-center",
                                children: [
                                  Object(a.jsx)("div", {
                                    className: "col-lg-4 col-md-4",
                                    children: Object(a.jsx)("div", {
                                      className: "advisor-image",
                                      children: Object(a.jsx)("img", {
                                        src: "/images/advisor/advisor2.jpg",
                                        alt: "image",
                                      }),
                                    }),
                                  }),
                                  Object(a.jsx)("div", {
                                    className: "col-lg-8 col-md-8",
                                    children: Object(a.jsxs)("div", {
                                      className: "advisor-content",
                                      children: [
                                        Object(a.jsx)("h3", {
                                          children: Object(a.jsx)("a", {
                                            href: "profile.html",
                                            children: "Sarah Taylor",
                                          }),
                                        }),
                                        Object(a.jsx)("span", {
                                          className: "sub-title",
                                          children: "Agile Project Expert",
                                        }),
                                        Object(a.jsx)("p", {
                                          children:
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol aliqua.",
                                        }),
                                        Object(a.jsxs)("ul", {
                                          className: "social-link",
                                          children: [
                                            Object(a.jsx)("li", {
                                              children: Object(a.jsx)("a", {
                                                href: "#",
                                                className: "d-block",
                                                target: "_blank",
                                                children: Object(a.jsx)("i", {
                                                  className: "bx bxl-facebook",
                                                }),
                                              }),
                                            }),
                                            Object(a.jsx)("li", {
                                              children: Object(a.jsx)("a", {
                                                href: "#",
                                                className: "d-block",
                                                target: "_blank",
                                                children: Object(a.jsx)("i", {
                                                  className: "bx bxl-twitter",
                                                }),
                                              }),
                                            }),
                                            Object(a.jsx)("li", {
                                              children: Object(a.jsx)("a", {
                                                href: "#",
                                                className: "d-block",
                                                target: "_blank",
                                                children: Object(a.jsx)("i", {
                                                  className: "bx bxl-instagram",
                                                }),
                                              }),
                                            }),
                                            Object(a.jsx)("li", {
                                              children: Object(a.jsx)("a", {
                                                href: "#",
                                                className: "d-block",
                                                target: "_blank",
                                                children: Object(a.jsx)("i", {
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
                            Object(a.jsx)("div", {
                              className: "single-advisor-box",
                              children: Object(a.jsxs)("div", {
                                className: "row align-items-center",
                                children: [
                                  Object(a.jsx)("div", {
                                    className: "col-lg-4 col-md-4",
                                    children: Object(a.jsx)("div", {
                                      className: "advisor-image",
                                      children: Object(a.jsx)("img", {
                                        src: "/images/advisor/advisor3.jpg",
                                        alt: "image",
                                      }),
                                    }),
                                  }),
                                  Object(a.jsx)("div", {
                                    className: "col-lg-8 col-md-8",
                                    children: Object(a.jsxs)("div", {
                                      className: "advisor-content",
                                      children: [
                                        Object(a.jsx)("h3", {
                                          children: Object(a.jsx)("a", {
                                            href: "profile.html",
                                            children: "James Andy",
                                          }),
                                        }),
                                        Object(a.jsx)("span", {
                                          className: "sub-title",
                                          children: "QA Project Expert",
                                        }),
                                        Object(a.jsx)("p", {
                                          children:
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol aliqua.",
                                        }),
                                        Object(a.jsxs)("ul", {
                                          className: "social-link",
                                          children: [
                                            Object(a.jsx)("li", {
                                              children: Object(a.jsx)("a", {
                                                href: "#",
                                                className: "d-block",
                                                target: "_blank",
                                                children: Object(a.jsx)("i", {
                                                  className: "bx bxl-facebook",
                                                }),
                                              }),
                                            }),
                                            Object(a.jsx)("li", {
                                              children: Object(a.jsx)("a", {
                                                href: "#",
                                                className: "d-block",
                                                target: "_blank",
                                                children: Object(a.jsx)("i", {
                                                  className: "bx bxl-twitter",
                                                }),
                                              }),
                                            }),
                                            Object(a.jsx)("li", {
                                              children: Object(a.jsx)("a", {
                                                href: "#",
                                                className: "d-block",
                                                target: "_blank",
                                                children: Object(a.jsx)("i", {
                                                  className: "bx bxl-instagram",
                                                }),
                                              }),
                                            }),
                                            Object(a.jsx)("li", {
                                              children: Object(a.jsx)("a", {
                                                href: "#",
                                                className: "d-block",
                                                target: "_blank",
                                                children: Object(a.jsx)("i", {
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
    ENSr: function (e, s, t) {
      "use strict";
      var c = t("rePB"),
        a = t("nKUr"),
        i = t("ODXe"),
        r = t("q1tI"),
        l = t.n(r),
        n = t("Vvt1");
      function j(e, s) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          s &&
            (c = c.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            t.push.apply(t, c);
        }
        return t;
      }
      function o(e) {
        for (var s = 1; s < arguments.length; s++) {
          var t = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? j(Object(t), !0).forEach(function (s) {
                Object(c.a)(e, s, t[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (s) {
                Object.defineProperty(
                  e,
                  s,
                  Object.getOwnPropertyDescriptor(t, s)
                );
              });
        }
        return e;
      }
      var d = t.n(n)()(
          function () {
            return t.e(3).then(t.t.bind(null, "Rst5", 7));
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
        m = {
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
        };
      s.a = function () {
        var e = l.a.useState(!1),
          s = Object(i.a)(e, 2),
          t = s[0],
          c = s[1];
        return (
          l.a.useEffect(function () {
            c(!0);
          }, []),
          Object(a.jsx)("div", {
            className: "testimonials-area ptb-100",
            children: Object(a.jsxs)("div", {
              className: "container",
              children: [
                Object(a.jsxs)("div", {
                  className: "section-title",
                  children: [
                    Object(a.jsx)("span", {
                      className: "sub-title",
                      children: "Testimonials",
                    }),
                    Object(a.jsx)("h2", {
                      children: "What People Say About eDemy",
                    }),
                    Object(a.jsx)("p", {
                      children:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    }),
                  ],
                }),
                t
                  ? Object(a.jsxs)(
                      d,
                      o(
                        o(
                          {
                            className:
                              "testimonials-slides owl-carousel owl-theme",
                          },
                          m
                        ),
                        {},
                        {
                          children: [
                            Object(a.jsxs)("div", {
                              className: "single-testimonials-item",
                              children: [
                                Object(a.jsx)("img", {
                                  src: "/images/user1.jpg",
                                  className: "client-img",
                                  alt: "image",
                                }),
                                Object(a.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.",
                                }),
                                Object(a.jsx)("h3", { children: "John Smith" }),
                                Object(a.jsx)("span", {
                                  children: "Python Developer",
                                }),
                                Object(a.jsxs)("div", {
                                  className: "shape-img",
                                  children: [
                                    Object(a.jsx)("img", {
                                      src: "/images/shape4.png",
                                      className: "shape-1",
                                      alt: "image",
                                    }),
                                    Object(a.jsx)("img", {
                                      src: "/images/shape14.png",
                                      className: "shape-2",
                                      alt: "image",
                                    }),
                                    Object(a.jsx)("img", {
                                      src: "/images/shape7.png",
                                      className: "shape-3",
                                      alt: "image",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(a.jsxs)("div", {
                              className: "single-testimonials-item",
                              children: [
                                Object(a.jsx)("img", {
                                  src: "/images/user2.jpg",
                                  className: "client-img",
                                  alt: "image",
                                }),
                                Object(a.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.",
                                }),
                                Object(a.jsx)("h3", {
                                  children: "Sarah Taylor",
                                }),
                                Object(a.jsx)("span", {
                                  children: "PHP Developer",
                                }),
                                Object(a.jsxs)("div", {
                                  className: "shape-img",
                                  children: [
                                    Object(a.jsx)("img", {
                                      src: "/images/shape4.png",
                                      className: "shape-1",
                                      alt: "image",
                                    }),
                                    Object(a.jsx)("img", {
                                      src: "/images/shape14.png",
                                      className: "shape-2",
                                      alt: "image",
                                    }),
                                    Object(a.jsx)("img", {
                                      src: "/images/shape7.png",
                                      className: "shape-3",
                                      alt: "image",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(a.jsxs)("div", {
                              className: "single-testimonials-item",
                              children: [
                                Object(a.jsx)("img", {
                                  src: "/images/user3.jpg",
                                  className: "client-img",
                                  alt: "image",
                                }),
                                Object(a.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.",
                                }),
                                Object(a.jsx)("h3", {
                                  children: "David Warner",
                                }),
                                Object(a.jsx)("span", {
                                  children: "QA Developer",
                                }),
                                Object(a.jsxs)("div", {
                                  className: "shape-img",
                                  children: [
                                    Object(a.jsx)("img", {
                                      src: "/images/shape4.png",
                                      className: "shape-1",
                                      alt: "image",
                                    }),
                                    Object(a.jsx)("img", {
                                      src: "/images/shape14.png",
                                      className: "shape-2",
                                      alt: "image",
                                    }),
                                    Object(a.jsx)("img", {
                                      src: "/images/shape7.png",
                                      className: "shape-3",
                                      alt: "image",
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
              ],
            }),
          })
        );
      };
    },
    Ix5F: function (e, s, t) {
      "use strict";
      var c = t("nKUr"),
        a = (t("q1tI"), t("YFqc")),
        i = t.n(a);
      s.a = function (e) {
        var s = e.pageTitle,
          t = e.homePageUrl,
          a = e.homePageText,
          r = e.activePageText;
        return Object(c.jsxs)("div", {
          className: "page-title-area",
          children: [
            Object(c.jsx)("div", {
              className: "container",
              children: Object(c.jsxs)("div", {
                className: "page-title-content",
                children: [
                  Object(c.jsxs)("ul", {
                    children: [
                      Object(c.jsx)("li", {
                        children: Object(c.jsx)(i.a, {
                          href: t,
                          children: Object(c.jsx)("a", { children: a }),
                        }),
                      }),
                      Object(c.jsx)("li", { className: "active", children: r }),
                    ],
                  }),
                  Object(c.jsx)("h2", { children: s }),
                ],
              }),
            }),
            Object(c.jsx)("div", {
              className: "shape9",
              children: Object(c.jsx)("img", {
                src: "/images/shape8.svg",
                alt: "image",
              }),
            }),
          ],
        });
      };
    },
    rePB: function (e, s, t) {
      "use strict";
      function c(e, s, t) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = t),
          e
        );
      }
      t.d(s, "a", function () {
        return c;
      });
    },
    sex0: function (e, s, t) {
      "use strict";
      var c = t("rePB"),
        a = t("nKUr"),
        i = t("ODXe"),
        r = t("q1tI"),
        l = t.n(r),
        n = t("Vvt1");
      function j(e, s) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          s &&
            (c = c.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            t.push.apply(t, c);
        }
        return t;
      }
      function o(e) {
        for (var s = 1; s < arguments.length; s++) {
          var t = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? j(Object(t), !0).forEach(function (s) {
                Object(c.a)(e, s, t[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (s) {
                Object.defineProperty(
                  e,
                  s,
                  Object.getOwnPropertyDescriptor(t, s)
                );
              });
        }
        return e;
      }
      var d = t.n(n)()(
          function () {
            return t.e(3).then(t.t.bind(null, "Rst5", 7));
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
        m = {
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
        var e = l.a.useState(!1),
          s = Object(i.a)(e, 2),
          t = s[0],
          c = s[1];
        return (
          l.a.useEffect(function () {
            c(!0);
          }, []),
          Object(a.jsx)("div", {
            className: "partner-area ptb-70",
            children: Object(a.jsx)("div", {
              className: "container",
              children: t
                ? Object(a.jsxs)(
                    d,
                    o(
                      o(
                        { className: "partner-slides owl-carousel owl-theme" },
                        m
                      ),
                      {},
                      {
                        children: [
                          Object(a.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(a.jsx)("img", {
                              src: "/images/partner/partner1.png",
                              alt: "image",
                            }),
                          }),
                          Object(a.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(a.jsx)("img", {
                              src: "/images/partner/partner2.png",
                              alt: "image",
                            }),
                          }),
                          Object(a.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(a.jsx)("img", {
                              src: "/images/partner/partner3.png",
                              alt: "image",
                            }),
                          }),
                          Object(a.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(a.jsx)("img", {
                              src: "/images/partner/partner4.png",
                              alt: "image",
                            }),
                          }),
                          Object(a.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(a.jsx)("img", {
                              src: "/images/partner/partner5.png",
                              alt: "image",
                            }),
                          }),
                          Object(a.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(a.jsx)("img", {
                              src: "/images/partner/partner6.png",
                              alt: "image",
                            }),
                          }),
                          Object(a.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(a.jsx)("img", {
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
    "wh+f": function (e, s, t) {
      "use strict";
      var c = t("nKUr");
      t("q1tI");
      s.a = function () {
        return Object(c.jsx)("div", {
          className: "funfacts-area bg-f5f7fa",
          children: Object(c.jsx)("div", {
            className: "container",
            children: Object(c.jsxs)("div", {
              className: "row",
              children: [
                Object(c.jsx)("div", {
                  className: "col-lg-3 col-md-3 col-sm-6",
                  children: Object(c.jsxs)("div", {
                    className: "single-funfacts-item",
                    children: [
                      Object(c.jsx)("h3", { children: "1,926" }),
                      Object(c.jsx)("p", { children: "Finished Sessions" }),
                    ],
                  }),
                }),
                Object(c.jsx)("div", {
                  className: "col-lg-3 col-md-3 col-sm-6",
                  children: Object(c.jsxs)("div", {
                    className: "single-funfacts-item",
                    children: [
                      Object(c.jsx)("h3", { children: "3,279" }),
                      Object(c.jsx)("p", { children: "Enrolled Learners" }),
                    ],
                  }),
                }),
                Object(c.jsx)("div", {
                  className: "col-lg-3 col-md-3 col-sm-6",
                  children: Object(c.jsxs)("div", {
                    className: "single-funfacts-item",
                    children: [
                      Object(c.jsx)("h3", { children: "250" }),
                      Object(c.jsx)("p", { children: "Online Instructors" }),
                    ],
                  }),
                }),
                Object(c.jsx)("div", {
                  className: "col-lg-3 col-md-3 col-sm-6",
                  children: Object(c.jsxs)("div", {
                    className: "single-funfacts-item",
                    children: [
                      Object(c.jsx)("h3", { children: "100%" }),
                      Object(c.jsx)("p", { children: "Satisfaction Rate" }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      };
    },
    xwMB: function (e, s, t) {
      "use strict";
      t.r(s);
      var c = t("nKUr"),
        a = t("q1tI"),
        i = t.n(a),
        r = t("Ix5F"),
        l = t("ODXe"),
        n = t("YFqc"),
        j = t.n(n),
        o = t("Vvt1"),
        d = t.n(o)()(
          function () {
            return Promise.all([t.e(0), t.e(6), t.e(8)]).then(
              t.t.bind(null, "60Bi", 7)
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
        m = function () {
          var e = i.a.useState(!1),
            s = Object(l.a)(e, 2),
            t = s[0],
            a = s[1];
          i.a.useEffect(function () {
            a(!0);
          }, []);
          var r = i.a.useState(!0),
            n = Object(l.a)(r, 2),
            o = n[0],
            m = n[1];
          return Object(c.jsx)(i.a.Fragment, {
            children: Object(c.jsxs)("div", {
              className: "about-area-two ptb-100",
              children: [
                Object(c.jsx)("div", {
                  className: "container",
                  children: Object(c.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                      Object(c.jsx)("div", {
                        className: "col-lg-5 col-md-12",
                        children: Object(c.jsxs)("div", {
                          className: "about-content-box",
                          children: [
                            Object(c.jsx)("span", {
                              className: "sub-title",
                              children: "Distance Learning",
                            }),
                            Object(c.jsx)("h2", {
                              children:
                                "Build Your Project Management Skills Online, Anytime",
                            }),
                            Object(c.jsx)("p", {
                              children:
                                "Want to learn and earn PDUs or CEUs on your schedule \u2014 anytime, anywhere? Or, pick up a new skill quickly like, project team leadership or agile? Browse our most popular online courses.",
                            }),
                            Object(c.jsx)("p", {
                              children: Object(c.jsx)("strong", {
                                children:
                                  "Grow your knowledge and your opportunities with thought leadership, training and tools.",
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(c.jsx)("div", {
                        className: "col-lg-7 col-md-12",
                        children: Object(c.jsxs)("div", {
                          className: "about-video-box",
                          children: [
                            Object(c.jsx)("div", {
                              className: "image",
                              children: Object(c.jsx)("img", {
                                src: "/images/about-img5.jpg",
                                alt: "image",
                              }),
                            }),
                            Object(c.jsx)(j.a, {
                              href: "#play-video",
                              children: Object(c.jsx)("a", {
                                onClick: function (e) {
                                  e.preventDefault(), m(!o);
                                },
                                className: "video-btn popup-youtube",
                                children: Object(c.jsx)("i", {
                                  className: "flaticon-play",
                                }),
                              }),
                            }),
                            Object(c.jsx)("div", {
                              className: "shape10",
                              children: Object(c.jsx)("img", {
                                src: "/images/shape9.png",
                                alt: "image",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                Object(c.jsx)("div", {
                  className: "shape3",
                  children: Object(c.jsx)("img", {
                    src: "/images/shape3.png",
                    alt: "image",
                  }),
                }),
                Object(c.jsx)("div", {
                  className: "shape4",
                  children: Object(c.jsx)("img", {
                    src: "/images/shape4.png",
                    alt: "image",
                  }),
                }),
                Object(c.jsx)("div", {
                  className: "shape2",
                  children: Object(c.jsx)("img", {
                    src: "/images/shape2.png",
                    alt: "image",
                  }),
                }),
                t
                  ? Object(c.jsx)(d, {
                      channel: "youtube",
                      isOpen: !o,
                      videoId: "bk7McNUjWgw",
                      onClose: function () {
                        return m(!o);
                      },
                    })
                  : "",
              ],
            }),
          });
        },
        b = t("wh+f"),
        O = t("ENSr"),
        h = t("/LjO"),
        u = t("sex0");
      s.default = function () {
        return Object(c.jsxs)(i.a.Fragment, {
          children: [
            Object(c.jsx)(r.a, {
              pageTitle: "About Us",
              homePageUrl: "/",
              homePageText: "Home",
              activePageText: "About Us",
            }),
            Object(c.jsx)(m, {}),
            Object(c.jsx)(b.a, {}),
            Object(c.jsx)(O.a, {}),
            Object(c.jsx)(h.a, {}),
            Object(c.jsx)(u.a, {}),
          ],
        });
      };
    },
    yOd6: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about-2",
        function () {
          return t("xwMB");
        },
      ]);
    },
  },
  [["yOd6", 1, 0, 2, 4]],
]);
