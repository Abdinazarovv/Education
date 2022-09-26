(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [16],
  {
    "+tXn": function (e, s, c) {
      "use strict";
      var a = c("nKUr");
      c("q1tI");
      s.a = function () {
        return Object(a.jsx)("div", {
          className: "funfacts-area-two",
          children: Object(a.jsx)("div", {
            className: "container",
            children: Object(a.jsxs)("div", {
              className: "row",
              children: [
                Object(a.jsx)("div", {
                  className: "col-lg-3 col-md-3 col-sm-6",
                  children: Object(a.jsxs)("div", {
                    className: "single-funfacts",
                    children: [
                      Object(a.jsx)("img", {
                        src: "/images/funfacts-shape2.png",
                        alt: "image",
                      }),
                      Object(a.jsx)("h3", { children: "1,926" }),
                      Object(a.jsx)("p", { children: "Finished Sessions" }),
                    ],
                  }),
                }),
                Object(a.jsx)("div", {
                  className: "col-lg-3 col-md-3 col-sm-6",
                  children: Object(a.jsxs)("div", {
                    className: "single-funfacts",
                    children: [
                      Object(a.jsx)("img", {
                        src: "/images/funfacts-shape2.png",
                        alt: "image",
                      }),
                      Object(a.jsx)("h3", { children: "3,279" }),
                      Object(a.jsx)("p", { children: "Enrolled Learners" }),
                    ],
                  }),
                }),
                Object(a.jsx)("div", {
                  className: "col-lg-3 col-md-3 col-sm-6",
                  children: Object(a.jsxs)("div", {
                    className: "single-funfacts",
                    children: [
                      Object(a.jsx)("img", {
                        src: "/images/funfacts-shape2.png",
                        alt: "image",
                      }),
                      Object(a.jsx)("h3", { children: "250" }),
                      Object(a.jsx)("p", { children: "Online Instructors" }),
                    ],
                  }),
                }),
                Object(a.jsx)("div", {
                  className: "col-lg-3 col-md-3 col-sm-6",
                  children: Object(a.jsxs)("div", {
                    className: "single-funfacts",
                    children: [
                      Object(a.jsx)("img", {
                        src: "/images/funfacts-shape2.png",
                        alt: "image",
                      }),
                      Object(a.jsx)("h3", { children: "100%" }),
                      Object(a.jsx)("p", { children: "Satisfaction Rate" }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      };
    },
    "6Umg": function (e, s, c) {
      "use strict";
      var a = c("rePB"),
        t = c("nKUr"),
        i = c("ODXe"),
        r = c("YFqc"),
        l = c.n(r),
        n = c("q1tI"),
        j = c.n(n),
        d = c("Vvt1");
      function b(e, s) {
        var c = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          s &&
            (a = a.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            c.push.apply(c, a);
        }
        return c;
      }
      function o(e) {
        for (var s = 1; s < arguments.length; s++) {
          var c = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? b(Object(c), !0).forEach(function (s) {
                Object(a.a)(e, s, c[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(c))
            : b(Object(c)).forEach(function (s) {
                Object.defineProperty(
                  e,
                  s,
                  Object.getOwnPropertyDescriptor(c, s)
                );
              });
        }
        return e;
      }
      var m = c.n(d)()(
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
        x = {
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
            768: { items: 2 },
            992: { items: 3 },
          },
        };
      s.a = function () {
        var e = j.a.useState(!1),
          s = Object(i.a)(e, 2),
          c = s[0],
          a = s[1];
        return (
          j.a.useEffect(function () {
            a(!0);
          }, []),
          Object(t.jsx)("div", {
            className: "advisor-area bg-f9f9f9 pt-100",
            children: Object(t.jsxs)("div", {
              className: "container",
              children: [
                Object(t.jsxs)("div", {
                  className: "section-title",
                  children: [
                    Object(t.jsx)("span", {
                      className: "sub-title",
                      children: "Course Advisor",
                    }),
                    Object(t.jsx)("h2", {
                      children: "Meet Our World-class Instructors",
                    }),
                    Object(t.jsx)("p", {
                      children:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    }),
                  ],
                }),
                c
                  ? Object(t.jsxs)(
                      m,
                      o(
                        o(
                          {
                            className:
                              "advisor-slides-two owl-carousel owl-theme",
                          },
                          x
                        ),
                        {},
                        {
                          children: [
                            Object(t.jsxs)("div", {
                              className: "single-advisor-item",
                              children: [
                                Object(t.jsxs)("div", {
                                  className: "advisor-image",
                                  children: [
                                    Object(t.jsx)("img", {
                                      src: "/images/advisor/advisor4.jpg",
                                      alt: "image",
                                    }),
                                    Object(t.jsxs)("ul", {
                                      className: "social-link",
                                      children: [
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsx)("a", {
                                            href: "#",
                                            className: "d-block",
                                            target: "_blank",
                                            children: Object(t.jsx)("i", {
                                              className: "bx bxl-facebook",
                                            }),
                                          }),
                                        }),
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsx)("a", {
                                            href: "#",
                                            className: "d-block",
                                            target: "_blank",
                                            children: Object(t.jsx)("i", {
                                              className: "bx bxl-twitter",
                                            }),
                                          }),
                                        }),
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsx)("a", {
                                            href: "#",
                                            className: "d-block",
                                            target: "_blank",
                                            children: Object(t.jsx)("i", {
                                              className: "bx bxl-instagram",
                                            }),
                                          }),
                                        }),
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsx)("a", {
                                            href: "#",
                                            className: "d-block",
                                            target: "_blank",
                                            children: Object(t.jsx)("i", {
                                              className: "bx bxl-linkedin",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(t.jsxs)("div", {
                                  className: "advisor-content",
                                  children: [
                                    Object(t.jsx)("h3", {
                                      children: Object(t.jsx)(l.a, {
                                        href: "/profile",
                                        children: Object(t.jsx)("a", {
                                          children: "James Andy",
                                        }),
                                      }),
                                    }),
                                    Object(t.jsx)("span", {
                                      children: "Project Management Expert",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(t.jsxs)("div", {
                              className: "single-advisor-item",
                              children: [
                                Object(t.jsxs)("div", {
                                  className: "advisor-image",
                                  children: [
                                    Object(t.jsx)("img", {
                                      src: "/images/advisor/advisor5.jpg",
                                      alt: "image",
                                    }),
                                    Object(t.jsxs)("ul", {
                                      className: "social-link",
                                      children: [
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsx)("a", {
                                            href: "#",
                                            className: "d-block",
                                            target: "_blank",
                                            children: Object(t.jsx)("i", {
                                              className: "bx bxl-facebook",
                                            }),
                                          }),
                                        }),
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsx)("a", {
                                            href: "#",
                                            className: "d-block",
                                            target: "_blank",
                                            children: Object(t.jsx)("i", {
                                              className: "bx bxl-twitter",
                                            }),
                                          }),
                                        }),
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsx)("a", {
                                            href: "#",
                                            className: "d-block",
                                            target: "_blank",
                                            children: Object(t.jsx)("i", {
                                              className: "bx bxl-instagram",
                                            }),
                                          }),
                                        }),
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsx)("a", {
                                            href: "#",
                                            className: "d-block",
                                            target: "_blank",
                                            children: Object(t.jsx)("i", {
                                              className: "bx bxl-linkedin",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(t.jsxs)("div", {
                                  className: "advisor-content",
                                  children: [
                                    Object(t.jsx)("h3", {
                                      children: Object(t.jsx)(l.a, {
                                        href: "/profile",
                                        children: Object(t.jsx)("a", {
                                          children: "Jassica Hische",
                                        }),
                                      }),
                                    }),
                                    Object(t.jsx)("span", {
                                      children: "Illustrator Expert",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(t.jsxs)("div", {
                              className: "single-advisor-item",
                              children: [
                                Object(t.jsxs)("div", {
                                  className: "advisor-image",
                                  children: [
                                    Object(t.jsx)("img", {
                                      src: "/images/advisor/advisor6.jpg",
                                      alt: "image",
                                    }),
                                    Object(t.jsxs)("ul", {
                                      className: "social-link",
                                      children: [
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsx)("a", {
                                            href: "#",
                                            className: "d-block",
                                            target: "_blank",
                                            children: Object(t.jsx)("i", {
                                              className: "bx bxl-facebook",
                                            }),
                                          }),
                                        }),
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsx)("a", {
                                            href: "#",
                                            className: "d-block",
                                            target: "_blank",
                                            children: Object(t.jsx)("i", {
                                              className: "bx bxl-twitter",
                                            }),
                                          }),
                                        }),
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsx)("a", {
                                            href: "#",
                                            className: "d-block",
                                            target: "_blank",
                                            children: Object(t.jsx)("i", {
                                              className: "bx bxl-instagram",
                                            }),
                                          }),
                                        }),
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsx)("a", {
                                            href: "#",
                                            className: "d-block",
                                            target: "_blank",
                                            children: Object(t.jsx)("i", {
                                              className: "bx bxl-linkedin",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(t.jsxs)("div", {
                                  className: "advisor-content",
                                  children: [
                                    Object(t.jsx)("h3", {
                                      children: Object(t.jsx)(l.a, {
                                        href: "/profile",
                                        children: Object(t.jsx)("a", {
                                          children: "Alister Cock",
                                        }),
                                      }),
                                    }),
                                    Object(t.jsx)("span", {
                                      children: "QA Project Expert",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(t.jsxs)("div", {
                              className: "single-advisor-item",
                              children: [
                                Object(t.jsxs)("div", {
                                  className: "advisor-image",
                                  children: [
                                    Object(t.jsx)("img", {
                                      src: "/images/advisor/advisor7.jpg",
                                      alt: "image",
                                    }),
                                    Object(t.jsxs)("ul", {
                                      className: "social-link",
                                      children: [
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsx)("a", {
                                            href: "#",
                                            className: "d-block",
                                            target: "_blank",
                                            children: Object(t.jsx)("i", {
                                              className: "bx bxl-facebook",
                                            }),
                                          }),
                                        }),
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsx)("a", {
                                            href: "#",
                                            className: "d-block",
                                            target: "_blank",
                                            children: Object(t.jsx)("i", {
                                              className: "bx bxl-twitter",
                                            }),
                                          }),
                                        }),
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsx)("a", {
                                            href: "#",
                                            className: "d-block",
                                            target: "_blank",
                                            children: Object(t.jsx)("i", {
                                              className: "bx bxl-instagram",
                                            }),
                                          }),
                                        }),
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsx)("a", {
                                            href: "#",
                                            className: "d-block",
                                            target: "_blank",
                                            children: Object(t.jsx)("i", {
                                              className: "bx bxl-linkedin",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(t.jsxs)("div", {
                                  className: "advisor-content",
                                  children: [
                                    Object(t.jsx)("h3", {
                                      children: Object(t.jsx)(l.a, {
                                        href: "/profile",
                                        children: Object(t.jsx)("a", {
                                          children: "Lina Ninja",
                                        }),
                                      }),
                                    }),
                                    Object(t.jsx)("span", {
                                      children: "QA Project Expert",
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
    "7iwr": function (e, s, c) {
      "use strict";
      var a = c("rePB"),
        t = c("nKUr"),
        i = c("ODXe"),
        r = c("q1tI"),
        l = c.n(r),
        n = c("YFqc"),
        j = c.n(n),
        d = c("Vvt1");
      function b(e, s) {
        var c = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          s &&
            (a = a.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            c.push.apply(c, a);
        }
        return c;
      }
      function o(e) {
        for (var s = 1; s < arguments.length; s++) {
          var c = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? b(Object(c), !0).forEach(function (s) {
                Object(a.a)(e, s, c[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(c))
            : b(Object(c)).forEach(function (s) {
                Object.defineProperty(
                  e,
                  s,
                  Object.getOwnPropertyDescriptor(c, s)
                );
              });
        }
        return e;
      }
      var m = c.n(d)()(
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
        x = {
          loop: !0,
          nav: !0,
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
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
          },
        };
      s.a = function () {
        var e = l.a.useState(!1),
          s = Object(i.a)(e, 2),
          c = s[0],
          a = s[1];
        return (
          l.a.useEffect(function () {
            a(!0);
          }, []),
          Object(t.jsx)("div", {
            className: "blog-area ptb-100",
            children: Object(t.jsxs)("div", {
              className: "container",
              children: [
                Object(t.jsxs)("div", {
                  className: "section-title",
                  children: [
                    Object(t.jsx)("span", {
                      className: "sub-title",
                      children: "News",
                    }),
                    Object(t.jsx)("h2", {
                      children: "Check Out Our Latest Blog",
                    }),
                    Object(t.jsx)("p", {
                      children:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    }),
                  ],
                }),
                c
                  ? Object(t.jsxs)(
                      m,
                      o(
                        o(
                          { className: "blog-slides owl-carousel owl-theme" },
                          x
                        ),
                        {},
                        {
                          children: [
                            Object(t.jsxs)("div", {
                              className: "single-blog-post-box",
                              children: [
                                Object(t.jsx)("div", {
                                  className: "post-image",
                                  children: Object(t.jsx)(j.a, {
                                    href: "/single-blog-1",
                                    children: Object(t.jsx)("a", {
                                      className: "d-block",
                                      children: Object(t.jsx)("img", {
                                        src: "/images/blog/blog1.jpg",
                                        alt: "image",
                                      }),
                                    }),
                                  }),
                                }),
                                Object(t.jsxs)("div", {
                                  className: "post-content",
                                  children: [
                                    Object(t.jsx)(j.a, {
                                      href: "#",
                                      children: Object(t.jsx)("a", {
                                        className: "category",
                                        children: "Education",
                                      }),
                                    }),
                                    Object(t.jsx)("h3", {
                                      children: Object(t.jsx)(j.a, {
                                        href: "/single-blog-1",
                                        children: Object(t.jsx)("a", {
                                          children:
                                            "University Admissions Could Face Emergency Controls",
                                        }),
                                      }),
                                    }),
                                    Object(t.jsxs)("ul", {
                                      className:
                                        "post-content-footer d-flex justify-content-between align-items-center",
                                      children: [
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsxs)("div", {
                                            className:
                                              "post-author d-flex align-items-center",
                                            children: [
                                              Object(t.jsx)("img", {
                                                src: "/images/user1.jpg",
                                                className: "rounded-circle",
                                                alt: "image",
                                              }),
                                              Object(t.jsx)("span", {
                                                children: "Alex Morgan",
                                              }),
                                            ],
                                          }),
                                        }),
                                        Object(t.jsxs)("li", {
                                          children: [
                                            Object(t.jsx)("i", {
                                              className: "flaticon-calendar",
                                            }),
                                            " April 30, 2020",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(t.jsxs)("div", {
                              className: "single-blog-post-box",
                              children: [
                                Object(t.jsx)("div", {
                                  className: "post-image",
                                  children: Object(t.jsx)(j.a, {
                                    href: "/single-blog-1",
                                    children: Object(t.jsx)("a", {
                                      className: "d-block",
                                      children: Object(t.jsx)("img", {
                                        src: "/images/blog/blog2.jpg",
                                        alt: "image",
                                      }),
                                    }),
                                  }),
                                }),
                                Object(t.jsxs)("div", {
                                  className: "post-content",
                                  children: [
                                    Object(t.jsx)(j.a, {
                                      href: "#",
                                      children: Object(t.jsx)("a", {
                                        className: "category",
                                        children: "Online",
                                      }),
                                    }),
                                    Object(t.jsx)("h3", {
                                      children: Object(t.jsx)(j.a, {
                                        href: "/single-blog-1",
                                        children: Object(t.jsx)("a", {
                                          children:
                                            "Online Learning Can Prepare Students For A Fast",
                                        }),
                                      }),
                                    }),
                                    Object(t.jsxs)("ul", {
                                      className:
                                        "post-content-footer d-flex justify-content-between align-items-center",
                                      children: [
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsxs)("div", {
                                            className:
                                              "post-author d-flex align-items-center",
                                            children: [
                                              Object(t.jsx)("img", {
                                                src: "/images/user2.jpg",
                                                className: "rounded-circle",
                                                alt: "image",
                                              }),
                                              Object(t.jsx)("span", {
                                                children: "Sarah Taylor",
                                              }),
                                            ],
                                          }),
                                        }),
                                        Object(t.jsxs)("li", {
                                          children: [
                                            Object(t.jsx)("i", {
                                              className: "flaticon-calendar",
                                            }),
                                            " April 29, 2020",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(t.jsxs)("div", {
                              className: "single-blog-post-box",
                              children: [
                                Object(t.jsx)("div", {
                                  className: "post-image",
                                  children: Object(t.jsx)(j.a, {
                                    href: "/single-blog-1",
                                    children: Object(t.jsx)("a", {
                                      className: "d-block",
                                      children: Object(t.jsx)("img", {
                                        src: "/images/blog/blog3.jpg",
                                        alt: "image",
                                      }),
                                    }),
                                  }),
                                }),
                                Object(t.jsxs)("div", {
                                  className: "post-content",
                                  children: [
                                    Object(t.jsx)(j.a, {
                                      href: "#",
                                      children: Object(t.jsx)("a", {
                                        className: "category",
                                        children: "Learning",
                                      }),
                                    }),
                                    Object(t.jsx)("h3", {
                                      children: Object(t.jsx)(j.a, {
                                        href: "/single-blog-1",
                                        children: Object(t.jsx)("a", {
                                          children:
                                            "As Learning Moves Online, Trigger Warnings Must Too",
                                        }),
                                      }),
                                    }),
                                    Object(t.jsxs)("ul", {
                                      className:
                                        "post-content-footer d-flex justify-content-between align-items-center",
                                      children: [
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsxs)("div", {
                                            className:
                                              "post-author d-flex align-items-center",
                                            children: [
                                              Object(t.jsx)("img", {
                                                src: "/images/user3.jpg",
                                                className: "rounded-circle",
                                                alt: "image",
                                              }),
                                              Object(t.jsx)("span", {
                                                children: "David Warner",
                                              }),
                                            ],
                                          }),
                                        }),
                                        Object(t.jsxs)("li", {
                                          children: [
                                            Object(t.jsx)("i", {
                                              className: "flaticon-calendar",
                                            }),
                                            " April 28, 2020",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(t.jsxs)("div", {
                              className: "single-blog-post-box",
                              children: [
                                Object(t.jsx)("div", {
                                  className: "post-image",
                                  children: Object(t.jsx)(j.a, {
                                    href: "/single-blog-1",
                                    children: Object(t.jsx)("a", {
                                      className: "d-block",
                                      children: Object(t.jsx)("img", {
                                        src: "/images/blog/blog2.jpg",
                                        alt: "image",
                                      }),
                                    }),
                                  }),
                                }),
                                Object(t.jsxs)("div", {
                                  className: "post-content",
                                  children: [
                                    Object(t.jsx)(j.a, {
                                      href: "#",
                                      children: Object(t.jsx)("a", {
                                        className: "category",
                                        children: "Learning",
                                      }),
                                    }),
                                    Object(t.jsx)("h3", {
                                      children: Object(t.jsx)(j.a, {
                                        href: "/single-blog-1",
                                        children: Object(t.jsx)("a", {
                                          children:
                                            "As Learning Moves Online, Trigger Warnings Must Too",
                                        }),
                                      }),
                                    }),
                                    Object(t.jsxs)("ul", {
                                      className:
                                        "post-content-footer d-flex justify-content-between align-items-center",
                                      children: [
                                        Object(t.jsx)("li", {
                                          children: Object(t.jsxs)("div", {
                                            className:
                                              "post-author d-flex align-items-center",
                                            children: [
                                              Object(t.jsx)("img", {
                                                src: "/images/user3.jpg",
                                                className: "rounded-circle",
                                                alt: "image",
                                              }),
                                              Object(t.jsx)("span", {
                                                children: "David Warner",
                                              }),
                                            ],
                                          }),
                                        }),
                                        Object(t.jsxs)("li", {
                                          children: [
                                            Object(t.jsx)("i", {
                                              className: "flaticon-calendar",
                                            }),
                                            " April 28, 2020",
                                          ],
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
                  className: "blog-post-info",
                  children: Object(t.jsxs)("p", {
                    children: [
                      "Get into details now?\u200b ",
                      Object(t.jsx)(j.a, {
                        href: "/blog-4",
                        children: Object(t.jsx)("a", {
                          children: "View all posts",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    AjzA: function (e, s, c) {
      "use strict";
      var a = c("nKUr"),
        t = (c("q1tI"), c("YFqc")),
        i = c.n(t);
      s.a = function () {
        return Object(a.jsxs)("div", {
          className: "banner-wrapper jarallax",
          children: [
            Object(a.jsx)("div", {
              className: "d-table",
              children: Object(a.jsx)("div", {
                className: "d-table-cell",
                children: Object(a.jsx)("div", {
                  className: "container",
                  children: Object(a.jsxs)("div", {
                    className: "banner-wrapper-text",
                    children: [
                      Object(a.jsx)("h1", {
                        children:
                          "Build Skills With Experts Any Time, Anywhere",
                      }),
                      Object(a.jsx)("p", {
                        children:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      }),
                      Object(a.jsx)(i.a, {
                        href: "/courses-4",
                        children: Object(a.jsxs)("a", {
                          className: "default-btn",
                          children: [
                            Object(a.jsx)("i", { className: "flaticon-user" }),
                            "View All Courses",
                            Object(a.jsx)("span", {}),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
            Object(a.jsx)("div", {
              className: "banner-shape11",
              children: Object(a.jsx)("img", {
                src: "/images/banner-shape12.png",
                alt: "image",
              }),
            }),
            Object(a.jsx)("div", {
              className: "banner-shape12",
              children: Object(a.jsx)("img", {
                src: "/images/banner-shape13.png",
                alt: "image",
              }),
            }),
            Object(a.jsx)("div", {
              className: "banner-shape13",
              children: Object(a.jsx)("img", {
                src: "/images/banner-shape14.png",
                alt: "image",
              }),
            }),
          ],
        });
      };
    },
    Bmwz: function (e, s, c) {
      "use strict";
      var a = c("nKUr"),
        t = (c("q1tI"), c("YFqc")),
        i = c.n(t);
      s.a = function () {
        return Object(a.jsxs)("div", {
          className: "about-area-three ptb-100",
          children: [
            Object(a.jsx)("div", {
              className: "container",
              children: Object(a.jsxs)("div", {
                className: "row align-items-center",
                children: [
                  Object(a.jsx)("div", {
                    className: "col-lg-5 col-md-12",
                    children: Object(a.jsxs)("div", {
                      className: "about-content-box",
                      children: [
                        Object(a.jsx)("span", {
                          className: "sub-title",
                          children: "Distance Learning",
                        }),
                        Object(a.jsx)("h2", {
                          children: "Build Your Skills Online, Anytime",
                        }),
                        Object(a.jsx)("p", {
                          children:
                            "Want to learn and earn PDUs or CEUs on your schedule \u2014 anytime, anywhere? Or, pick up a new skill quickly like, project team leadership or agile? Browse our most popular online courses.",
                        }),
                        Object(a.jsx)("p", {
                          children: Object(a.jsx)("strong", {
                            children:
                              "Grow your knowledge and your opportunities with thought leadership, training and tools.",
                          }),
                        }),
                        Object(a.jsx)(i.a, {
                          href: "/courses-4",
                          children: Object(a.jsxs)("a", {
                            className: "default-btn",
                            children: [
                              Object(a.jsx)("i", {
                                className: "flaticon-user",
                              }),
                              " View All Courses ",
                              Object(a.jsx)("span", {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(a.jsx)("div", {
                    className: "col-lg-7 col-md-12",
                    children: Object(a.jsxs)("div", {
                      className: "about-img",
                      children: [
                        Object(a.jsxs)("div", {
                          className: "image",
                          children: [
                            Object(a.jsx)("img", {
                              src: "/images/about-img7.png",
                              alt: "image",
                            }),
                            Object(a.jsx)("img", {
                              src: "/images/about-img8.png",
                              alt: "image",
                            }),
                          ],
                        }),
                        Object(a.jsx)("div", {
                          className: "shape17",
                          children: Object(a.jsx)("img", {
                            src: "/images/shape16.png",
                            alt: "image",
                          }),
                        }),
                        Object(a.jsx)("div", {
                          className: "shape18",
                          children: Object(a.jsx)("img", {
                            src: "/images/shape17.png",
                            alt: "image",
                          }),
                        }),
                        Object(a.jsx)("div", {
                          className: "shape19",
                          children: Object(a.jsx)("img", {
                            src: "/images/shape18.png",
                            alt: "image",
                          }),
                        }),
                        Object(a.jsx)("div", {
                          className: "shape20",
                          children: Object(a.jsx)("img", {
                            src: "/images/shape19.png",
                            alt: "image",
                          }),
                        }),
                        Object(a.jsx)("div", {
                          className: "shape21",
                          children: Object(a.jsx)("img", {
                            src: "/images/shape20.png",
                            alt: "image",
                          }),
                        }),
                        Object(a.jsx)("div", {
                          className: "shape22",
                          children: Object(a.jsx)("img", {
                            src: "/images/shape21.png",
                            alt: "image",
                          }),
                        }),
                        Object(a.jsx)("div", {
                          className: "shape23",
                          children: Object(a.jsx)("img", {
                            src: "/images/shape22.png",
                            alt: "image",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            Object(a.jsx)("div", {
              className: "shape3",
              children: Object(a.jsx)("img", {
                src: "/images/shape3.png",
                alt: "image",
              }),
            }),
            Object(a.jsx)("div", {
              className: "shape4",
              children: Object(a.jsx)("img", {
                src: "/images/shape4.png",
                alt: "image",
              }),
            }),
          ],
        });
      };
    },
    MzSq: function (e, s, c) {
      "use strict";
      var a = c("rePB"),
        t = c("nKUr"),
        i = c("ODXe"),
        r = c("q1tI"),
        l = c.n(r),
        n = c("YFqc"),
        j = c.n(n),
        d = c("Vvt1");
      function b(e, s) {
        var c = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          s &&
            (a = a.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            c.push.apply(c, a);
        }
        return c;
      }
      function o(e) {
        for (var s = 1; s < arguments.length; s++) {
          var c = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? b(Object(c), !0).forEach(function (s) {
                Object(a.a)(e, s, c[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(c))
            : b(Object(c)).forEach(function (s) {
                Object.defineProperty(
                  e,
                  s,
                  Object.getOwnPropertyDescriptor(c, s)
                );
              });
        }
        return e;
      }
      var m = c.n(d)()(
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
        x = {
          loop: !0,
          nav: !0,
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
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
          },
        };
      s.a = function () {
        var e = l.a.useState(!1),
          s = Object(i.a)(e, 2),
          c = s[0],
          a = s[1];
        return (
          l.a.useEffect(function () {
            a(!0);
          }, []),
          Object(t.jsx)("div", {
            className: "courses-area ptb-100",
            children: Object(t.jsxs)("div", {
              className: "container",
              children: [
                Object(t.jsxs)("div", {
                  className: "section-title",
                  children: [
                    Object(t.jsx)("span", {
                      className: "sub-title",
                      children: "Go At Your Own Pace",
                    }),
                    Object(t.jsx)("h2", { children: "Our Popular Courses" }),
                    Object(t.jsx)("p", {
                      children:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    }),
                  ],
                }),
                c
                  ? Object(t.jsxs)(
                      m,
                      o(
                        o(
                          {
                            className: "courses-slides owl-carousel owl-theme",
                          },
                          x
                        ),
                        {},
                        {
                          children: [
                            Object(t.jsxs)("div", {
                              className: "single-courses-box",
                              children: [
                                Object(t.jsxs)("div", {
                                  className: "courses-image",
                                  children: [
                                    Object(t.jsx)(j.a, {
                                      href: "/single-courses-2",
                                      children: Object(t.jsx)("a", {
                                        className: "d-block image",
                                        children: Object(t.jsx)("img", {
                                          src: "/images/courses/courses1.jpg",
                                          alt: "image",
                                        }),
                                      }),
                                    }),
                                    Object(t.jsx)("a", {
                                      href: "#",
                                      className: "fav",
                                      children: Object(t.jsx)("i", {
                                        className: "flaticon-heart",
                                      }),
                                    }),
                                    Object(t.jsx)("div", {
                                      className: "price shadow",
                                      children: "$39",
                                    }),
                                  ],
                                }),
                                Object(t.jsxs)("div", {
                                  className: "courses-content",
                                  children: [
                                    Object(t.jsxs)("div", {
                                      className:
                                        "course-author d-flex align-items-center",
                                      children: [
                                        Object(t.jsx)("img", {
                                          src: "/images/user1.jpg",
                                          className: "rounded-circle",
                                          alt: "image",
                                        }),
                                        Object(t.jsx)("span", {
                                          children: "Alex Morgan",
                                        }),
                                      ],
                                    }),
                                    Object(t.jsx)("h3", {
                                      children: Object(t.jsx)(j.a, {
                                        href: "/single-courses-2",
                                        children: Object(t.jsx)("a", {
                                          children:
                                            "The Data Science Course 2020: Complete Data Science Bootcamp",
                                        }),
                                      }),
                                    }),
                                    Object(t.jsx)("p", {
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
                                    }),
                                    Object(t.jsxs)("ul", {
                                      className:
                                        "courses-box-footer d-flex justify-content-between align-items-center",
                                      children: [
                                        Object(t.jsxs)("li", {
                                          children: [
                                            Object(t.jsx)("i", {
                                              className: "flaticon-agenda",
                                            }),
                                            " 15 Lessons",
                                          ],
                                        }),
                                        Object(t.jsxs)("li", {
                                          children: [
                                            Object(t.jsx)("i", {
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
                            Object(t.jsxs)("div", {
                              className: "single-courses-box",
                              children: [
                                Object(t.jsxs)("div", {
                                  className: "courses-image",
                                  children: [
                                    Object(t.jsx)(j.a, {
                                      href: "/single-courses-2",
                                      children: Object(t.jsx)("a", {
                                        className: "d-block image",
                                        children: Object(t.jsx)("img", {
                                          src: "/images/courses/courses2.jpg",
                                          alt: "image",
                                        }),
                                      }),
                                    }),
                                    Object(t.jsx)("a", {
                                      href: "#",
                                      className: "fav",
                                      children: Object(t.jsx)("i", {
                                        className: "flaticon-heart",
                                      }),
                                    }),
                                    Object(t.jsx)("div", {
                                      className: "price shadow",
                                      children: "$49",
                                    }),
                                  ],
                                }),
                                Object(t.jsxs)("div", {
                                  className: "courses-content",
                                  children: [
                                    Object(t.jsxs)("div", {
                                      className:
                                        "course-author d-flex align-items-center",
                                      children: [
                                        Object(t.jsx)("img", {
                                          src: "/images/user2.jpg",
                                          className: "rounded-circle",
                                          alt: "image",
                                        }),
                                        Object(t.jsx)("span", {
                                          children: "Sarah Taylor",
                                        }),
                                      ],
                                    }),
                                    Object(t.jsx)("h3", {
                                      children: Object(t.jsx)(j.a, {
                                        href: "/single-courses-2",
                                        children: Object(t.jsx)("a", {
                                          children:
                                            "Java Programming MasterclassName for Software Developers",
                                        }),
                                      }),
                                    }),
                                    Object(t.jsx)("p", {
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
                                    }),
                                    Object(t.jsxs)("ul", {
                                      className:
                                        "courses-box-footer d-flex justify-content-between align-items-center",
                                      children: [
                                        Object(t.jsxs)("li", {
                                          children: [
                                            Object(t.jsx)("i", {
                                              className: "flaticon-agenda",
                                            }),
                                            " 20 Lessons",
                                          ],
                                        }),
                                        Object(t.jsxs)("li", {
                                          children: [
                                            Object(t.jsx)("i", {
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
                            Object(t.jsxs)("div", {
                              className: "single-courses-box",
                              children: [
                                Object(t.jsxs)("div", {
                                  className: "courses-image",
                                  children: [
                                    Object(t.jsx)(j.a, {
                                      href: "/single-courses-2",
                                      children: Object(t.jsx)("a", {
                                        className: "d-block image",
                                        children: Object(t.jsx)("img", {
                                          src: "/images/courses/courses3.jpg",
                                          alt: "image",
                                        }),
                                      }),
                                    }),
                                    Object(t.jsx)("a", {
                                      href: "#",
                                      className: "fav",
                                      children: Object(t.jsx)("i", {
                                        className: "flaticon-heart",
                                      }),
                                    }),
                                    Object(t.jsx)("div", {
                                      className: "price shadow",
                                      children: "$59",
                                    }),
                                  ],
                                }),
                                Object(t.jsxs)("div", {
                                  className: "courses-content",
                                  children: [
                                    Object(t.jsxs)("div", {
                                      className:
                                        "course-author d-flex align-items-center",
                                      children: [
                                        Object(t.jsx)("img", {
                                          src: "/images/user3.jpg",
                                          className: "rounded-circle",
                                          alt: "image",
                                        }),
                                        Object(t.jsx)("span", {
                                          children: "David Warner",
                                        }),
                                      ],
                                    }),
                                    Object(t.jsx)("h3", {
                                      children: Object(t.jsx)(j.a, {
                                        href: "/single-courses-2",
                                        children: Object(t.jsx)("a", {
                                          children:
                                            "Deep Learning A-Z\u2122: Hands-On Artificial Neural Networks",
                                        }),
                                      }),
                                    }),
                                    Object(t.jsx)("p", {
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
                                    }),
                                    Object(t.jsxs)("ul", {
                                      className:
                                        "courses-box-footer d-flex justify-content-between align-items-center",
                                      children: [
                                        Object(t.jsxs)("li", {
                                          children: [
                                            Object(t.jsx)("i", {
                                              className: "flaticon-agenda",
                                            }),
                                            " 20 Lessons",
                                          ],
                                        }),
                                        Object(t.jsxs)("li", {
                                          children: [
                                            Object(t.jsx)("i", {
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
                            Object(t.jsxs)("div", {
                              className: "single-courses-box",
                              children: [
                                Object(t.jsxs)("div", {
                                  className: "courses-image",
                                  children: [
                                    Object(t.jsx)(j.a, {
                                      href: "/single-courses-2",
                                      children: Object(t.jsx)("a", {
                                        className: "d-block image",
                                        children: Object(t.jsx)("img", {
                                          src: "/images/courses/courses4.jpg",
                                          alt: "image",
                                        }),
                                      }),
                                    }),
                                    Object(t.jsx)("a", {
                                      href: "#",
                                      className: "fav",
                                      children: Object(t.jsx)("i", {
                                        className: "flaticon-heart",
                                      }),
                                    }),
                                    Object(t.jsx)("div", {
                                      className: "price shadow",
                                      children: "$54",
                                    }),
                                  ],
                                }),
                                Object(t.jsxs)("div", {
                                  className: "courses-content",
                                  children: [
                                    Object(t.jsxs)("div", {
                                      className:
                                        "course-author d-flex align-items-center",
                                      children: [
                                        Object(t.jsx)("img", {
                                          src: "/images/user4.jpg",
                                          className: "rounded-circle",
                                          alt: "image",
                                        }),
                                        Object(t.jsx)("span", {
                                          children: "Andy Smith",
                                        }),
                                      ],
                                    }),
                                    Object(t.jsx)("h3", {
                                      children: Object(t.jsx)(j.a, {
                                        href: "/single-courses-2",
                                        children: Object(t.jsx)("a", {
                                          children:
                                            "Python for Finance: Investment Fundamentals & Data Analytics",
                                        }),
                                      }),
                                    }),
                                    Object(t.jsx)("p", {
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
                                    }),
                                    Object(t.jsxs)("ul", {
                                      className:
                                        "courses-box-footer d-flex justify-content-between align-items-center",
                                      children: [
                                        Object(t.jsxs)("li", {
                                          children: [
                                            Object(t.jsx)("i", {
                                              className: "flaticon-agenda",
                                            }),
                                            " 14 Lessons",
                                          ],
                                        }),
                                        Object(t.jsxs)("li", {
                                          children: [
                                            Object(t.jsx)("i", {
                                              className: "flaticon-people",
                                            }),
                                            " 211 Students",
                                          ],
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
                  className: "courses-info",
                  children: Object(t.jsxs)("p", {
                    children: [
                      "Get the most dedicated consultation for your life-changing course. Earn a certification for your effort and passion ",
                      Object(t.jsx)(j.a, {
                        href: "/profile-authentication",
                        children: Object(t.jsx)("a", {
                          children: "Join Free Now",
                        }),
                      }),
                      ".",
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    OTF4: function (e, s, c) {
      "use strict";
      var a = c("rePB"),
        t = c("nKUr"),
        i = c("ODXe"),
        r = c("q1tI"),
        l = c.n(r),
        n = c("Vvt1");
      function j(e, s) {
        var c = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          s &&
            (a = a.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            c.push.apply(c, a);
        }
        return c;
      }
      function d(e) {
        for (var s = 1; s < arguments.length; s++) {
          var c = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? j(Object(c), !0).forEach(function (s) {
                Object(a.a)(e, s, c[s]);
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
      var b = c.n(n)()(
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
        o = {
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
          c = s[0],
          a = s[1];
        return (
          l.a.useEffect(function () {
            a(!0);
          }, []),
          Object(t.jsx)("div", {
            className: "partner-area bg-f0f2f5 ptb-70",
            children: Object(t.jsx)("div", {
              className: "container",
              children: c
                ? Object(t.jsxs)(
                    b,
                    d(
                      d(
                        { className: "partner-slides owl-carousel owl-theme" },
                        o
                      ),
                      {},
                      {
                        children: [
                          Object(t.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(t.jsx)("img", {
                              src: "/images/partner/partner1.png",
                              alt: "image",
                            }),
                          }),
                          Object(t.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(t.jsx)("img", {
                              src: "/images/partner/partner2.png",
                              alt: "image",
                            }),
                          }),
                          Object(t.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(t.jsx)("img", {
                              src: "/images/partner/partner3.png",
                              alt: "image",
                            }),
                          }),
                          Object(t.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(t.jsx)("img", {
                              src: "/images/partner/partner4.png",
                              alt: "image",
                            }),
                          }),
                          Object(t.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(t.jsx)("img", {
                              src: "/images/partner/partner5.png",
                              alt: "image",
                            }),
                          }),
                          Object(t.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(t.jsx)("img", {
                              src: "/images/partner/partner6.png",
                              alt: "image",
                            }),
                          }),
                          Object(t.jsx)("div", {
                            className: "single-partner-item",
                            children: Object(t.jsx)("img", {
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
    TqIQ: function (e, s, c) {
      "use strict";
      var a = c("nKUr"),
        t = (c("q1tI"), c("YFqc")),
        i = c.n(t);
      s.a = function () {
        return Object(a.jsx)("div", {
          className: "boxes-area bg-f5f7fa",
          children: Object(a.jsx)("div", {
            className: "container",
            children: Object(a.jsxs)("div", {
              className: "row",
              children: [
                Object(a.jsx)("div", {
                  className: "col-lg-4 col-sm-6 col-md-6",
                  children: Object(a.jsxs)("div", {
                    className: "single-box-item",
                    children: [
                      Object(a.jsxs)("div", {
                        className: "icon",
                        children: [
                          Object(a.jsx)("i", {
                            className: "flaticon-brain-process",
                          }),
                          Object(a.jsx)("img", {
                            src: "/images/icon-shape.png",
                            alt: "image",
                          }),
                        ],
                      }),
                      Object(a.jsx)("h3", {
                        children: "Learn the Latest Skills",
                      }),
                      Object(a.jsx)("p", {
                        children:
                          "Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor.",
                      }),
                      Object(a.jsx)(i.a, {
                        href: "/membership-levels",
                        children: Object(a.jsx)("a", {
                          className: "link-btn",
                          children: "Start Now!",
                        }),
                      }),
                    ],
                  }),
                }),
                Object(a.jsx)("div", {
                  className: "col-lg-4 col-sm-6 col-md-6",
                  children: Object(a.jsxs)("div", {
                    className: "single-box-item",
                    children: [
                      Object(a.jsxs)("div", {
                        className: "icon",
                        children: [
                          Object(a.jsx)("i", {
                            className: "flaticon-computer",
                          }),
                          Object(a.jsx)("img", {
                            src: "/images/icon-shape.png",
                            alt: "image",
                          }),
                        ],
                      }),
                      Object(a.jsx)("h3", { children: "Go at Your Own Pace" }),
                      Object(a.jsx)("p", {
                        children:
                          "Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor.",
                      }),
                      Object(a.jsx)(i.a, {
                        href: "/membership-levels",
                        children: Object(a.jsx)("a", {
                          className: "link-btn",
                          children: "Start Now!",
                        }),
                      }),
                    ],
                  }),
                }),
                Object(a.jsx)("div", {
                  className:
                    "col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3",
                  children: Object(a.jsxs)("div", {
                    className: "single-box-item",
                    children: [
                      Object(a.jsxs)("div", {
                        className: "icon",
                        children: [
                          Object(a.jsx)("i", {
                            className: "flaticon-shield-1",
                          }),
                          Object(a.jsx)("img", {
                            src: "/images/icon-shape.png",
                            alt: "image",
                          }),
                        ],
                      }),
                      Object(a.jsx)("h3", {
                        children: "Learn from Industry Experts",
                      }),
                      Object(a.jsx)("p", {
                        children:
                          "Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor.",
                      }),
                      Object(a.jsx)(i.a, {
                        href: "/membership-levels",
                        children: Object(a.jsx)("a", {
                          className: "link-btn",
                          children: "Start Now!",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      };
    },
    Twcx: function (e, s, c) {
      "use strict";
      var a = c("nKUr"),
        t = (c("q1tI"), c("YFqc")),
        i = c.n(t);
      s.a = function () {
        return Object(a.jsxs)("div", {
          className: "courses-area bg-f5f7fa pt-100 pb-70",
          children: [
            Object(a.jsxs)("div", {
              className: "container",
              children: [
                Object(a.jsxs)("div", {
                  className: "section-title",
                  children: [
                    Object(a.jsx)("span", {
                      className: "sub-title",
                      children: "Go At Your Own Pace",
                    }),
                    Object(a.jsx)("h2", {
                      children: "The World\u2019s Largest Selection Of Courses",
                    }),
                    Object(a.jsx)("p", {
                      children:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    }),
                  ],
                }),
                Object(a.jsx)("div", {
                  className: "shorting",
                  children: Object(a.jsxs)("div", {
                    className: "row",
                    children: [
                      Object(a.jsx)("div", {
                        className: "col-lg-4 col-md-6",
                        children: Object(a.jsxs)("div", {
                          className: "single-courses-item-box",
                          children: [
                            Object(a.jsxs)("div", {
                              className: "courses-image",
                              children: [
                                Object(a.jsx)(i.a, {
                                  href: "/single-courses-2",
                                  children: Object(a.jsx)("a", {
                                    className: "d-block image",
                                    children: Object(a.jsx)("img", {
                                      src: "/images/courses/courses12.jpg",
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                Object(a.jsx)(i.a, {
                                  href: "#",
                                  children: Object(a.jsx)("a", {
                                    className: "fav",
                                    children: Object(a.jsx)("i", {
                                      className: "flaticon-heart",
                                    }),
                                  }),
                                }),
                                Object(a.jsx)("div", {
                                  className: "price shadow",
                                  children: "$39",
                                }),
                              ],
                            }),
                            Object(a.jsxs)("div", {
                              className: "courses-content",
                              children: [
                                Object(a.jsx)("h3", {
                                  children: Object(a.jsx)(i.a, {
                                    href: "/single-courses-2",
                                    children: Object(a.jsx)("a", {
                                      children:
                                        "Agile Crash Course: Agile Project Management",
                                    }),
                                  }),
                                }),
                                Object(a.jsxs)("div", {
                                  className: "rating",
                                  children: [
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("div", {
                                      className: "rating-total",
                                      children: "5.0 (1 rating)",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(a.jsx)("div", {
                        className: "col-lg-4 col-md-6",
                        children: Object(a.jsxs)("div", {
                          className: "single-courses-item-box",
                          children: [
                            Object(a.jsxs)("div", {
                              className: "courses-image",
                              children: [
                                Object(a.jsx)(i.a, {
                                  href: "/single-courses-2",
                                  children: Object(a.jsx)("a", {
                                    className: "d-block image",
                                    children: Object(a.jsx)("img", {
                                      src: "/images/courses/courses13.jpg",
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                Object(a.jsx)(i.a, {
                                  href: "#",
                                  children: Object(a.jsx)("a", {
                                    className: "fav",
                                    children: Object(a.jsx)("i", {
                                      className: "flaticon-heart",
                                    }),
                                  }),
                                }),
                                Object(a.jsx)("div", {
                                  className: "price shadow",
                                  children: "$59",
                                }),
                              ],
                            }),
                            Object(a.jsxs)("div", {
                              className: "courses-content",
                              children: [
                                Object(a.jsx)("h3", {
                                  children: Object(a.jsx)(i.a, {
                                    href: "/single-courses-2",
                                    children: Object(a.jsx)("a", {
                                      children:
                                        "Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)",
                                    }),
                                  }),
                                }),
                                Object(a.jsxs)("div", {
                                  className: "rating",
                                  children: [
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("div", {
                                      className: "rating-total",
                                      children: "5.0 (2 rating)",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(a.jsx)("div", {
                        className: "col-lg-4 col-md-6",
                        children: Object(a.jsxs)("div", {
                          className: "single-courses-item-box",
                          children: [
                            Object(a.jsxs)("div", {
                              className: "courses-image",
                              children: [
                                Object(a.jsx)(i.a, {
                                  href: "/single-courses-2",
                                  children: Object(a.jsx)("a", {
                                    className: "d-block image",
                                    children: Object(a.jsx)("img", {
                                      src: "/images/courses/courses14.jpg",
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                Object(a.jsx)(i.a, {
                                  href: "#",
                                  children: Object(a.jsx)("a", {
                                    className: "fav",
                                    children: Object(a.jsx)("i", {
                                      className: "flaticon-heart",
                                    }),
                                  }),
                                }),
                                Object(a.jsx)("div", {
                                  className: "price shadow",
                                  children: "$69",
                                }),
                              ],
                            }),
                            Object(a.jsxs)("div", {
                              className: "courses-content",
                              children: [
                                Object(a.jsx)("h3", {
                                  children: Object(a.jsx)(i.a, {
                                    href: "/single-courses-2",
                                    children: Object(a.jsx)("a", {
                                      children:
                                        "The Python Bible\u2122 | Everything You Need to Program in Python",
                                    }),
                                  }),
                                }),
                                Object(a.jsxs)("div", {
                                  className: "rating",
                                  children: [
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("div", {
                                      className: "rating-total",
                                      children: "5.0 (3 rating)",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(a.jsx)("div", {
                        className: "col-lg-4 col-md-6",
                        children: Object(a.jsxs)("div", {
                          className: "single-courses-item-box",
                          children: [
                            Object(a.jsxs)("div", {
                              className: "courses-image",
                              children: [
                                Object(a.jsx)(i.a, {
                                  href: "/single-courses-2",
                                  children: Object(a.jsx)("a", {
                                    className: "d-block image",
                                    children: Object(a.jsx)("img", {
                                      src: "/images/courses/courses15.jpg",
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                Object(a.jsx)(i.a, {
                                  href: "#",
                                  children: Object(a.jsx)("a", {
                                    className: "fav",
                                    children: Object(a.jsx)("i", {
                                      className: "flaticon-heart",
                                    }),
                                  }),
                                }),
                                Object(a.jsx)("div", {
                                  className: "price shadow",
                                  children: "$79",
                                }),
                              ],
                            }),
                            Object(a.jsxs)("div", {
                              className: "courses-content",
                              children: [
                                Object(a.jsx)("h3", {
                                  children: Object(a.jsx)(i.a, {
                                    href: "/single-courses-2",
                                    children: Object(a.jsx)("a", {
                                      children:
                                        "Mathematical Foundation For Machine Learning and AI",
                                    }),
                                  }),
                                }),
                                Object(a.jsxs)("div", {
                                  className: "rating",
                                  children: [
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("div", {
                                      className: "rating-total",
                                      children: "5.0 (4 rating)",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(a.jsx)("div", {
                        className: "col-lg-4 col-md-6",
                        children: Object(a.jsxs)("div", {
                          className: "single-courses-item-box",
                          children: [
                            Object(a.jsxs)("div", {
                              className: "courses-image",
                              children: [
                                Object(a.jsx)(i.a, {
                                  href: "/single-courses-2",
                                  children: Object(a.jsx)("a", {
                                    className: "d-block image",
                                    children: Object(a.jsx)("img", {
                                      src: "/images/courses/courses16.jpg",
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                Object(a.jsx)(i.a, {
                                  href: "#",
                                  children: Object(a.jsx)("a", {
                                    className: "fav",
                                    children: Object(a.jsx)("i", {
                                      className: "flaticon-heart",
                                    }),
                                  }),
                                }),
                                Object(a.jsx)("div", {
                                  className: "price shadow",
                                  children: "$89",
                                }),
                              ],
                            }),
                            Object(a.jsxs)("div", {
                              className: "courses-content",
                              children: [
                                Object(a.jsx)("h3", {
                                  children: Object(a.jsx)(i.a, {
                                    href: "/single-courses-2",
                                    children: Object(a.jsx)("a", {
                                      children:
                                        "The Ultimate Drawing Course - Beginner to Advanced",
                                    }),
                                  }),
                                }),
                                Object(a.jsxs)("div", {
                                  className: "rating",
                                  children: [
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("div", {
                                      className: "rating-total",
                                      children: "5.0 (5 rating)",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(a.jsx)("div", {
                        className: "col-lg-4 col-md-6",
                        children: Object(a.jsxs)("div", {
                          className: "single-courses-item-box",
                          children: [
                            Object(a.jsxs)("div", {
                              className: "courses-image",
                              children: [
                                Object(a.jsx)(i.a, {
                                  href: "/single-courses-2",
                                  children: Object(a.jsx)("a", {
                                    className: "d-block image",
                                    children: Object(a.jsx)("img", {
                                      src: "/images/courses/courses17.jpg",
                                      alt: "image",
                                    }),
                                  }),
                                }),
                                Object(a.jsx)(i.a, {
                                  href: "#",
                                  children: Object(a.jsx)("a", {
                                    className: "fav",
                                    children: Object(a.jsx)("i", {
                                      className: "flaticon-heart",
                                    }),
                                  }),
                                }),
                                Object(a.jsx)("div", {
                                  className: "price shadow",
                                  children: "$99",
                                }),
                              ],
                            }),
                            Object(a.jsxs)("div", {
                              className: "courses-content",
                              children: [
                                Object(a.jsx)("h3", {
                                  children: Object(a.jsx)(i.a, {
                                    href: "/single-courses-2",
                                    children: Object(a.jsx)("a", {
                                      children:
                                        "PyTorch: Deep Learning and Artificial Intelligence",
                                    }),
                                  }),
                                }),
                                Object(a.jsxs)("div", {
                                  className: "rating",
                                  children: [
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star",
                                    }),
                                    Object(a.jsx)("div", {
                                      className: "rating-total",
                                      children: "5.0 (6 rating)",
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
                }),
              ],
            }),
            Object(a.jsx)("div", {
              className: "shape16",
              children: Object(a.jsx)("img", {
                src: "/images/shape15.png",
                alt: "image",
              }),
            }),
          ],
        });
      };
    },
    ivM6: function (e, s, c) {
      "use strict";
      var a = c("rePB"),
        t = c("nKUr"),
        i = c("ODXe"),
        r = c("q1tI"),
        l = c.n(r),
        n = c("Vvt1");
      function j(e, s) {
        var c = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          s &&
            (a = a.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            c.push.apply(c, a);
        }
        return c;
      }
      function d(e) {
        for (var s = 1; s < arguments.length; s++) {
          var c = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? j(Object(c), !0).forEach(function (s) {
                Object(a.a)(e, s, c[s]);
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
      var b = c.n(n)()(
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
        o = {
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
            576: { items: 1 },
            768: { items: 2 },
            1200: { items: 2 },
          },
        };
      s.a = function () {
        var e = l.a.useState(!1),
          s = Object(i.a)(e, 2),
          c = s[0],
          a = s[1];
        return (
          l.a.useEffect(function () {
            a(!0);
          }, []),
          Object(t.jsxs)("div", {
            className: "feedback-area bg-fffaf3 ptb-100",
            children: [
              Object(t.jsx)("div", {
                className: "container",
                children: c
                  ? Object(t.jsxs)(
                      b,
                      d(
                        d(
                          {
                            className:
                              "feedback-slides-two owl-carousel owl-theme",
                          },
                          o
                        ),
                        {},
                        {
                          children: [
                            Object(t.jsxs)("div", {
                              className: "single-feedback-box",
                              children: [
                                Object(t.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.",
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
                                          children: "Python Developer",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(t.jsxs)("div", {
                              className: "single-feedback-box",
                              children: [
                                Object(t.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.",
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
                              className: "single-feedback-box",
                              children: [
                                Object(t.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.",
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
              }),
              Object(t.jsx)("div", { className: "divider2" }),
              Object(t.jsx)("div", { className: "divider3" }),
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
      };
    },
    rePB: function (e, s, c) {
      "use strict";
      function a(e, s, c) {
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
        return a;
      });
    },
    ur7V: function (e, s, c) {
      "use strict";
      var a = c("nKUr");
      c("q1tI");
      s.a = function () {
        return Object(a.jsxs)("div", {
          className: "subscribe-area bg-f9f9f9 ptb-100",
          children: [
            Object(a.jsx)("div", {
              className: "container",
              children: Object(a.jsxs)("div", {
                className: "subscribe-content",
                children: [
                  Object(a.jsx)("span", {
                    className: "sub-title",
                    children: "Go At Your Own Pace",
                  }),
                  Object(a.jsx)("h2", {
                    children: "Subscribe To Our Newsletter",
                  }),
                  Object(a.jsx)("p", {
                    children:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  }),
                  Object(a.jsxs)("form", {
                    className: "newsletter-form",
                    children: [
                      Object(a.jsx)("input", {
                        type: "text",
                        className: "input-newsletter",
                        placeholder: "Enter your email address",
                        name: "EMAIL",
                        required: !0,
                      }),
                      Object(a.jsxs)("button", {
                        type: "submit",
                        className: "default-btn",
                        children: [
                          Object(a.jsx)("i", { className: "flaticon-user" }),
                          " Subscribe Now ",
                          Object(a.jsx)("span", {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(a.jsx)("div", {
              className: "shape4",
              "data-speed": "0.06",
              "data-revert": "true",
              children: Object(a.jsx)("img", {
                src: "/images/shape4.png",
                alt: "image",
              }),
            }),
            Object(a.jsx)("div", {
              className: "shape13",
              "data-speed": "0.06",
              "data-revert": "true",
              children: Object(a.jsx)("img", {
                src: "/images/shape12.png",
                alt: "image",
              }),
            }),
            Object(a.jsx)("div", {
              className: "shape14",
              "data-speed": "0.06",
              "data-revert": "true",
              children: Object(a.jsx)("img", {
                src: "/images/shape13.png",
                alt: "image",
              }),
            }),
            Object(a.jsx)("div", {
              className: "shape15",
              "data-speed": "0.06",
              "data-revert": "true",
              children: Object(a.jsx)("img", {
                src: "/images/shape14.png",
                alt: "image",
              }),
            }),
          ],
        });
      };
    },
    "w+aE": function (e, s, c) {
      "use strict";
      var a = c("nKUr"),
        t = (c("q1tI"), c("YFqc")),
        i = c.n(t);
      s.a = function () {
        return Object(a.jsxs)("div", {
          className: "premium-access-area bg-f9f9f9 ptb-100",
          children: [
            Object(a.jsx)("div", {
              className: "container",
              children: Object(a.jsxs)("div", {
                className: "premium-access-content",
                children: [
                  Object(a.jsx)("span", {
                    className: "sub-title",
                    children: "Go at your own pace",
                  }),
                  Object(a.jsx)("h2", {
                    children: "Give their limitless potential unlimited access",
                  }),
                  Object(a.jsx)("p", {
                    children:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  }),
                  Object(a.jsx)(i.a, {
                    href: "/membership-levels",
                    children: Object(a.jsxs)("a", {
                      className: "default-btn",
                      children: [
                        Object(a.jsx)("i", { className: "flaticon-user" }),
                        " Give Premium Access ",
                        Object(a.jsx)("span", {}),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            Object(a.jsx)("div", {
              className: "shape3",
              children: Object(a.jsx)("img", {
                src: "/images/shape3.png",
                alt: "image",
              }),
            }),
            Object(a.jsx)("div", {
              className: "shape4",
              children: Object(a.jsx)("img", {
                src: "/images/shape4.png",
                alt: "image",
              }),
            }),
            Object(a.jsx)("div", {
              className: "shape8",
              children: Object(a.jsx)("img", {
                src: "/images/shape7.png",
                alt: "image",
              }),
            }),
          ],
        });
      };
    },
  },
]);
