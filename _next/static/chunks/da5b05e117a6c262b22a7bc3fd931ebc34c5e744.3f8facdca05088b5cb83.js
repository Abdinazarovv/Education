(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [21],
  {
    "+F5j": function (e, s, c) {
      "use strict";
      var a = c("rePB"),
        i = c("nKUr"),
        t = c("ODXe"),
        l = c("q1tI"),
        r = c.n(l),
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
      var o = c.n(n)()(
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
        var e = r.a.useState(!1),
          s = Object(t.a)(e, 2),
          c = s[0],
          a = s[1];
        return (
          r.a.useEffect(function () {
            a(!0);
          }, []),
          Object(i.jsx)("div", {
            className: "partner-area ptb-70",
            children: Object(i.jsx)("div", {
              className: "container",
              children: c
                ? Object(i.jsxs)(
                    o,
                    d(
                      d(
                        { className: "partner-slides owl-carousel owl-theme" },
                        m
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
    "1SAY": function (e, s, c) {
      "use strict";
      var a = c("nKUr"),
        i = (c("q1tI"), c("YFqc")),
        t = c.n(i);
      s.a = function () {
        return Object(a.jsx)("div", {
          className: "courses-area pt-100 pb-70",
          children: Object(a.jsxs)("div", {
            className: "container",
            children: [
              Object(a.jsxs)("div", {
                className: "section-title",
                children: [
                  Object(a.jsx)("span", {
                    className: "sub-title",
                    children: "Go at your own pace",
                  }),
                  Object(a.jsx)("h2", {
                    children: "Popular Project Management Courses",
                  }),
                  Object(a.jsx)("p", {
                    children:
                      "Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!",
                  }),
                ],
              }),
              Object(a.jsxs)("div", {
                className: "row",
                children: [
                  Object(a.jsx)("div", {
                    className: "col-lg-4 col-md-6",
                    children: Object(a.jsxs)("div", {
                      className: "single-courses-box without-boxshadow",
                      children: [
                        Object(a.jsxs)("div", {
                          className: "courses-image",
                          children: [
                            Object(a.jsx)(t.a, {
                              href: "/single-courses-2",
                              children: Object(a.jsx)("a", {
                                className: "d-block image",
                                children: Object(a.jsx)("img", {
                                  src: "/images/courses/courses9.jpg",
                                  alt: "image",
                                }),
                              }),
                            }),
                            Object(a.jsx)(t.a, {
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
                            Object(a.jsxs)("div", {
                              className:
                                "course-author d-flex align-items-center",
                              children: [
                                Object(a.jsx)("img", {
                                  src: "/images/user1.jpg",
                                  className: "rounded-circle",
                                  alt: "image",
                                }),
                                Object(a.jsx)("span", {
                                  children: "Alex Morgan",
                                }),
                              ],
                            }),
                            Object(a.jsx)("h3", {
                              children: Object(a.jsx)(t.a, {
                                href: "/single-courses-2",
                                children: Object(a.jsx)("a", {
                                  children:
                                    "PRINCE2\xae Practitioner Certification Training",
                                }),
                              }),
                            }),
                            Object(a.jsx)("p", {
                              children:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
                            }),
                            Object(a.jsxs)("ul", {
                              className:
                                "courses-box-footer d-flex justify-content-between align-items-center",
                              children: [
                                Object(a.jsxs)("li", {
                                  children: [
                                    Object(a.jsx)("i", {
                                      className: "flaticon-agenda",
                                    }),
                                    " 15 Lessons",
                                  ],
                                }),
                                Object(a.jsxs)("li", {
                                  children: [
                                    Object(a.jsx)("i", {
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
                  Object(a.jsx)("div", {
                    className: "col-lg-4 col-md-6",
                    children: Object(a.jsxs)("div", {
                      className: "single-courses-box without-boxshadow active",
                      children: [
                        Object(a.jsxs)("div", {
                          className: "courses-image",
                          children: [
                            Object(a.jsx)(t.a, {
                              href: "/single-courses-2",
                              children: Object(a.jsx)("a", {
                                className: "d-block image",
                                children: Object(a.jsx)("img", {
                                  src: "/images/courses/courses10.jpg",
                                  alt: "image",
                                }),
                              }),
                            }),
                            Object(a.jsx)(t.a, {
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
                              children: "$49",
                            }),
                          ],
                        }),
                        Object(a.jsxs)("div", {
                          className: "courses-content",
                          children: [
                            Object(a.jsxs)("div", {
                              className:
                                "course-author d-flex align-items-center",
                              children: [
                                Object(a.jsx)("img", {
                                  src: "/images/user2.jpg",
                                  className: "rounded-circle",
                                  alt: "image",
                                }),
                                Object(a.jsx)("span", {
                                  children: "Sarah Taylor",
                                }),
                              ],
                            }),
                            Object(a.jsx)("h3", {
                              children: Object(a.jsx)(t.a, {
                                href: "/single-courses-2",
                                children: Object(a.jsx)("a", {
                                  children:
                                    "PMI-RMP\xae Certification Training",
                                }),
                              }),
                            }),
                            Object(a.jsx)("p", {
                              children:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
                            }),
                            Object(a.jsxs)("ul", {
                              className:
                                "courses-box-footer d-flex justify-content-between align-items-center",
                              children: [
                                Object(a.jsxs)("li", {
                                  children: [
                                    Object(a.jsx)("i", {
                                      className: "flaticon-agenda",
                                    }),
                                    " 20 Lessons",
                                  ],
                                }),
                                Object(a.jsxs)("li", {
                                  children: [
                                    Object(a.jsx)("i", {
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
                  Object(a.jsx)("div", {
                    className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3",
                    children: Object(a.jsxs)("div", {
                      className: "single-courses-box without-boxshadow",
                      children: [
                        Object(a.jsxs)("div", {
                          className: "courses-image",
                          children: [
                            Object(a.jsx)(t.a, {
                              href: "/single-courses-2",
                              children: Object(a.jsx)("a", {
                                className: "d-block image",
                                children: Object(a.jsx)("img", {
                                  src: "/images/courses/courses11.jpg",
                                  alt: "image",
                                }),
                              }),
                            }),
                            Object(a.jsx)(t.a, {
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
                            Object(a.jsxs)("div", {
                              className:
                                "course-author d-flex align-items-center",
                              children: [
                                Object(a.jsx)("img", {
                                  src: "/images/user3.jpg",
                                  className: "rounded-circle",
                                  alt: "image",
                                }),
                                Object(a.jsx)("span", {
                                  children: "David Warner",
                                }),
                              ],
                            }),
                            Object(a.jsx)("h3", {
                              children: Object(a.jsx)(t.a, {
                                href: "/single-courses-2",
                                children: Object(a.jsx)("a", {
                                  children:
                                    "PRINCE2\xae Foundation Certification Training",
                                }),
                              }),
                            }),
                            Object(a.jsx)("p", {
                              children:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
                            }),
                            Object(a.jsxs)("ul", {
                              className:
                                "courses-box-footer d-flex justify-content-between align-items-center",
                              children: [
                                Object(a.jsxs)("li", {
                                  children: [
                                    Object(a.jsx)("i", {
                                      className: "flaticon-agenda",
                                    }),
                                    " 20 Lessons",
                                  ],
                                }),
                                Object(a.jsxs)("li", {
                                  children: [
                                    Object(a.jsx)("i", {
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
                  Object(a.jsx)("div", {
                    className: "col-lg-12 col-md-12",
                    children: Object(a.jsxs)("div", {
                      className: "courses-info",
                      children: [
                        Object(a.jsx)(t.a, {
                          href: "/courses-2",
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
                        Object(a.jsxs)("p", {
                          children: [
                            "Get into details now?\u200b ",
                            Object(a.jsx)(t.a, {
                              href: "/courses-2",
                              children: Object(a.jsx)("a", {
                                children: "PM Master\u2019s Program",
                              }),
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
        });
      };
    },
    "3dmV": function (e, s, c) {
      "use strict";
      var a = c("nKUr"),
        i = (c("q1tI"), c("YFqc")),
        t = c.n(i);
      s.a = function () {
        return Object(a.jsxs)("div", {
          className: "courses-area pt-100 pb-70",
          children: [
            Object(a.jsxs)("div", {
              className: "container",
              children: [
                Object(a.jsxs)("div", {
                  className: "section-title",
                  children: [
                    Object(a.jsx)("span", {
                      className: "sub-title",
                      children: "Go at your own pace",
                    }),
                    Object(a.jsx)("h2", {
                      children: "Project Management Master's Program",
                    }),
                    Object(a.jsx)("p", {
                      children:
                        "Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!",
                    }),
                  ],
                }),
                Object(a.jsxs)("div", {
                  className: "row",
                  children: [
                    Object(a.jsx)("div", {
                      className: "col-lg-4 col-md-6",
                      children: Object(a.jsxs)("div", {
                        className: "single-courses-box bg-color",
                        children: [
                          Object(a.jsxs)("div", {
                            className: "courses-image",
                            children: [
                              Object(a.jsx)(t.a, {
                                href: "/single-courses-2",
                                children: Object(a.jsx)("a", {
                                  className: "d-block image",
                                  children: Object(a.jsx)("img", {
                                    src: "/images/courses/courses6.jpg",
                                    alt: "image",
                                  }),
                                }),
                              }),
                              Object(a.jsx)(t.a, {
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
                                children: Object(a.jsx)(t.a, {
                                  href: "/single-courses-2",
                                  children: Object(a.jsx)("a", {
                                    children: "PMP\xae Plus",
                                  }),
                                }),
                              }),
                              Object(a.jsx)("p", {
                                children:
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
                              }),
                              Object(a.jsxs)("ul", {
                                className:
                                  "courses-box-footer d-flex justify-content-between align-items-center",
                                children: [
                                  Object(a.jsxs)("li", {
                                    children: [
                                      Object(a.jsx)("i", {
                                        className: "flaticon-agenda",
                                      }),
                                      " 15 Lessons",
                                    ],
                                  }),
                                  Object(a.jsxs)("li", {
                                    children: [
                                      Object(a.jsx)("i", {
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
                    Object(a.jsx)("div", {
                      className: "col-lg-4 col-md-6",
                      children: Object(a.jsxs)("div", {
                        className: "single-courses-box bg-color",
                        children: [
                          Object(a.jsxs)("div", {
                            className: "courses-image",
                            children: [
                              Object(a.jsx)(t.a, {
                                href: "/single-courses-2",
                                children: Object(a.jsx)("a", {
                                  className: "d-block image",
                                  children: Object(a.jsx)("img", {
                                    src: "/images/courses/courses7.jpg",
                                    alt: "image",
                                  }),
                                }),
                              }),
                              Object(a.jsx)(t.a, {
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
                                children: "$49",
                              }),
                            ],
                          }),
                          Object(a.jsxs)("div", {
                            className: "courses-content",
                            children: [
                              Object(a.jsx)("h3", {
                                children: Object(a.jsx)(t.a, {
                                  href: "/single-courses-2",
                                  children: Object(a.jsx)("a", {
                                    children: "PMP\xae Renewal Pack",
                                  }),
                                }),
                              }),
                              Object(a.jsx)("p", {
                                children:
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
                              }),
                              Object(a.jsxs)("ul", {
                                className:
                                  "courses-box-footer d-flex justify-content-between align-items-center",
                                children: [
                                  Object(a.jsxs)("li", {
                                    children: [
                                      Object(a.jsx)("i", {
                                        className: "flaticon-agenda",
                                      }),
                                      " 20 Lessons",
                                    ],
                                  }),
                                  Object(a.jsxs)("li", {
                                    children: [
                                      Object(a.jsx)("i", {
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
                    Object(a.jsx)("div", {
                      className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3",
                      children: Object(a.jsxs)("div", {
                        className: "single-courses-box bg-color",
                        children: [
                          Object(a.jsxs)("div", {
                            className: "courses-image",
                            children: [
                              Object(a.jsx)(t.a, {
                                href: "/single-courses-2",
                                children: Object(a.jsx)("a", {
                                  className: "d-block image",
                                  children: Object(a.jsx)("img", {
                                    src: "/images/courses/courses8.jpg",
                                    alt: "image",
                                  }),
                                }),
                              }),
                              Object(a.jsx)(t.a, {
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
                                children: Object(a.jsx)(t.a, {
                                  href: "/single-courses-2",
                                  children: Object(a.jsx)("a", {
                                    children: "Digital Project Manager",
                                  }),
                                }),
                              }),
                              Object(a.jsx)("p", {
                                children:
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
                              }),
                              Object(a.jsxs)("ul", {
                                className:
                                  "courses-box-footer d-flex justify-content-between align-items-center",
                                children: [
                                  Object(a.jsxs)("li", {
                                    children: [
                                      Object(a.jsx)("i", {
                                        className: "flaticon-agenda",
                                      }),
                                      " 20 Lessons",
                                    ],
                                  }),
                                  Object(a.jsxs)("li", {
                                    children: [
                                      Object(a.jsx)("i", {
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
                  ],
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
    "6tuT": function (e, s, c) {
      "use strict";
      var a = c("nKUr"),
        i = (c("q1tI"), c("YFqc")),
        t = c.n(i);
      s.a = function () {
        return Object(a.jsx)("div", {
          className: "blog-area ptb-100",
          children: Object(a.jsxs)("div", {
            className: "container",
            children: [
              Object(a.jsxs)("div", {
                className: "section-title",
                children: [
                  Object(a.jsx)("span", {
                    className: "sub-title",
                    children: "News and Blogs",
                  }),
                  Object(a.jsx)("h2", { children: "Our Latest Publications" }),
                  Object(a.jsx)("p", {
                    children:
                      "We always give extra care to our student's skills improvements and feel excited to share our latest research and learnings!",
                  }),
                ],
              }),
              Object(a.jsxs)("div", {
                className: "row",
                children: [
                  Object(a.jsx)("div", {
                    className: "col-lg-4 col-md-6",
                    children: Object(a.jsxs)("div", {
                      className: "single-blog-post",
                      children: [
                        Object(a.jsx)("div", {
                          className: "post-image",
                          children: Object(a.jsx)(t.a, {
                            href: "/single-blog-1",
                            children: Object(a.jsx)("a", {
                              className: "d-block",
                              children: Object(a.jsx)("img", {
                                src: "/images/blog/blog1.jpg",
                                alt: "image",
                              }),
                            }),
                          }),
                        }),
                        Object(a.jsxs)("div", {
                          className: "post-content",
                          children: [
                            Object(a.jsx)(t.a, {
                              href: "#",
                              children: Object(a.jsx)("a", {
                                className: "category",
                                children: "Education",
                              }),
                            }),
                            Object(a.jsx)("h3", {
                              children: Object(a.jsx)(t.a, {
                                href: "/single-blog-1",
                                children: Object(a.jsx)("a", {
                                  children:
                                    "University Admissions Could Face Emergency Controls",
                                }),
                              }),
                            }),
                            Object(a.jsxs)("ul", {
                              className:
                                "post-content-footer d-flex justify-content-between align-items-center",
                              children: [
                                Object(a.jsx)("li", {
                                  children: Object(a.jsxs)("div", {
                                    className:
                                      "post-author d-flex align-items-center",
                                    children: [
                                      Object(a.jsx)("img", {
                                        src: "/images/user1.jpg",
                                        className: "rounded-circle",
                                        alt: "image",
                                      }),
                                      Object(a.jsx)("span", {
                                        children: "Alex Morgan",
                                      }),
                                    ],
                                  }),
                                }),
                                Object(a.jsxs)("li", {
                                  children: [
                                    Object(a.jsx)("i", {
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
                  }),
                  Object(a.jsx)("div", {
                    className: "col-lg-4 col-md-6",
                    children: Object(a.jsxs)("div", {
                      className: "single-blog-post",
                      children: [
                        Object(a.jsx)("div", {
                          className: "post-image",
                          children: Object(a.jsx)(t.a, {
                            href: "/single-blog-1",
                            children: Object(a.jsx)("a", {
                              className: "d-block",
                              children: Object(a.jsx)("img", {
                                src: "/images/blog/blog2.jpg",
                                alt: "image",
                              }),
                            }),
                          }),
                        }),
                        Object(a.jsxs)("div", {
                          className: "post-content",
                          children: [
                            Object(a.jsx)(t.a, {
                              href: "#",
                              children: Object(a.jsx)("a", {
                                className: "category",
                                children: "Online",
                              }),
                            }),
                            Object(a.jsx)("h3", {
                              children: Object(a.jsx)(t.a, {
                                href: "/single-blog-1",
                                children: Object(a.jsx)("a", {
                                  children:
                                    "Online Learning Can Prepare Students For A Fast-Changing",
                                }),
                              }),
                            }),
                            Object(a.jsxs)("ul", {
                              className:
                                "post-content-footer d-flex justify-content-between align-items-center",
                              children: [
                                Object(a.jsx)("li", {
                                  children: Object(a.jsxs)("div", {
                                    className:
                                      "post-author d-flex align-items-center",
                                    children: [
                                      Object(a.jsx)("img", {
                                        src: "/images/user2.jpg",
                                        className: "rounded-circle",
                                        alt: "image",
                                      }),
                                      Object(a.jsx)("span", {
                                        children: "Sarah Taylor",
                                      }),
                                    ],
                                  }),
                                }),
                                Object(a.jsxs)("li", {
                                  children: [
                                    Object(a.jsx)("i", {
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
                  }),
                  Object(a.jsx)("div", {
                    className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3",
                    children: Object(a.jsxs)("div", {
                      className: "single-blog-post",
                      children: [
                        Object(a.jsx)("div", {
                          className: "post-image",
                          children: Object(a.jsx)(t.a, {
                            href: "/single-blog-1",
                            children: Object(a.jsx)("a", {
                              className: "d-block",
                              children: Object(a.jsx)("img", {
                                src: "/images/blog/blog3.jpg",
                                alt: "image",
                              }),
                            }),
                          }),
                        }),
                        Object(a.jsxs)("div", {
                          className: "post-content",
                          children: [
                            Object(a.jsx)(t.a, {
                              href: "#",
                              children: Object(a.jsx)("a", {
                                className: "category",
                                children: "Learning",
                              }),
                            }),
                            Object(a.jsx)("h3", {
                              children: Object(a.jsx)(t.a, {
                                href: "/single-blog-1",
                                children: Object(a.jsx)("a", {
                                  children:
                                    "As Learning Moves Online, Trigger Warnings Must Too",
                                }),
                              }),
                            }),
                            Object(a.jsxs)("ul", {
                              className:
                                "post-content-footer d-flex justify-content-between align-items-center",
                              children: [
                                Object(a.jsx)("li", {
                                  children: Object(a.jsxs)("div", {
                                    className:
                                      "post-author d-flex align-items-center",
                                    children: [
                                      Object(a.jsx)("img", {
                                        src: "/images/user3.jpg",
                                        className: "rounded-circle",
                                        alt: "image",
                                      }),
                                      Object(a.jsx)("span", {
                                        children: "David Warner",
                                      }),
                                    ],
                                  }),
                                }),
                                Object(a.jsxs)("li", {
                                  children: [
                                    Object(a.jsx)("i", {
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
                  }),
                  Object(a.jsx)("div", {
                    className: "col-lg-12 col-md-12",
                    children: Object(a.jsx)("div", {
                      className: "blog-post-info",
                      children: Object(a.jsxs)("p", {
                        children: [
                          "Get into details now?\u200b ",
                          Object(a.jsx)(t.a, {
                            href: "/blog-1",
                            children: Object(a.jsx)("a", {
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
      };
    },
    "7knv": function (e, s, c) {
      "use strict";
      var a = c("nKUr"),
        i = (c("q1tI"), c("YFqc")),
        t = c.n(i);
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
                  Object(a.jsx)(t.a, {
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
    ENSr: function (e, s, c) {
      "use strict";
      var a = c("rePB"),
        i = c("nKUr"),
        t = c("ODXe"),
        l = c("q1tI"),
        r = c.n(l),
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
      var o = c.n(n)()(
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
        var e = r.a.useState(!1),
          s = Object(t.a)(e, 2),
          c = s[0],
          a = s[1];
        return (
          r.a.useEffect(function () {
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
                      children: "Testimonials",
                    }),
                    Object(i.jsx)("h2", {
                      children: "What People Say About eDemy",
                    }),
                    Object(i.jsx)("p", {
                      children:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    }),
                  ],
                }),
                c
                  ? Object(i.jsxs)(
                      o,
                      d(
                        d(
                          {
                            className:
                              "testimonials-slides owl-carousel owl-theme",
                          },
                          m
                        ),
                        {},
                        {
                          children: [
                            Object(i.jsxs)("div", {
                              className: "single-testimonials-item",
                              children: [
                                Object(i.jsx)("img", {
                                  src: "/images/user1.jpg",
                                  className: "client-img",
                                  alt: "image",
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.",
                                }),
                                Object(i.jsx)("h3", { children: "John Smith" }),
                                Object(i.jsx)("span", {
                                  children: "Python Developer",
                                }),
                                Object(i.jsxs)("div", {
                                  className: "shape-img",
                                  children: [
                                    Object(i.jsx)("img", {
                                      src: "/images/shape4.png",
                                      className: "shape-1",
                                      alt: "image",
                                    }),
                                    Object(i.jsx)("img", {
                                      src: "/images/shape14.png",
                                      className: "shape-2",
                                      alt: "image",
                                    }),
                                    Object(i.jsx)("img", {
                                      src: "/images/shape7.png",
                                      className: "shape-3",
                                      alt: "image",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(i.jsxs)("div", {
                              className: "single-testimonials-item",
                              children: [
                                Object(i.jsx)("img", {
                                  src: "/images/user2.jpg",
                                  className: "client-img",
                                  alt: "image",
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.",
                                }),
                                Object(i.jsx)("h3", {
                                  children: "Sarah Taylor",
                                }),
                                Object(i.jsx)("span", {
                                  children: "PHP Developer",
                                }),
                                Object(i.jsxs)("div", {
                                  className: "shape-img",
                                  children: [
                                    Object(i.jsx)("img", {
                                      src: "/images/shape4.png",
                                      className: "shape-1",
                                      alt: "image",
                                    }),
                                    Object(i.jsx)("img", {
                                      src: "/images/shape14.png",
                                      className: "shape-2",
                                      alt: "image",
                                    }),
                                    Object(i.jsx)("img", {
                                      src: "/images/shape7.png",
                                      className: "shape-3",
                                      alt: "image",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(i.jsxs)("div", {
                              className: "single-testimonials-item",
                              children: [
                                Object(i.jsx)("img", {
                                  src: "/images/user3.jpg",
                                  className: "client-img",
                                  alt: "image",
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.",
                                }),
                                Object(i.jsx)("h3", {
                                  children: "David Warner",
                                }),
                                Object(i.jsx)("span", {
                                  children: "QA Developer",
                                }),
                                Object(i.jsxs)("div", {
                                  className: "shape-img",
                                  children: [
                                    Object(i.jsx)("img", {
                                      src: "/images/shape4.png",
                                      className: "shape-1",
                                      alt: "image",
                                    }),
                                    Object(i.jsx)("img", {
                                      src: "/images/shape14.png",
                                      className: "shape-2",
                                      alt: "image",
                                    }),
                                    Object(i.jsx)("img", {
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
    I22H: function (e, s, c) {
      "use strict";
      var a = c("nKUr"),
        i = (c("q1tI"), c("YFqc")),
        t = c.n(i);
      s.a = function () {
        return Object(a.jsxs)("div", {
          className: "view-all-courses-area-two ptb-70 bg-fef8ef",
          children: [
            Object(a.jsx)("div", {
              className: "container",
              children: Object(a.jsxs)("div", {
                className: "row align-items-center",
                children: [
                  Object(a.jsx)("div", {
                    className: "col-lg-6 col-md-12",
                    children: Object(a.jsxs)("div", {
                      className: "view-all-courses-content",
                      children: [
                        Object(a.jsx)("span", {
                          className: "sub-title",
                          children: "Distance learning",
                        }),
                        Object(a.jsx)("h2", {
                          children:
                            "Get ahead with Learning Paths. Stay Sharp.",
                        }),
                        Object(a.jsx)("p", {
                          children:
                            "With The Open University you can study whenever and wherever you choose. We have students in over 128 countries, and a global reputation as a pioneer in the field of flexible learning. Our flexible teaching also means, if you travel often or need to relocate, you can continue to study wherever you go.",
                        }),
                        Object(a.jsx)(t.a, {
                          href: "/courses-2",
                          children: Object(a.jsxs)("a", {
                            className: "default-btn",
                            children: [
                              Object(a.jsx)("i", {
                                className: "flaticon-agenda",
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
                    className: "col-lg-6 col-md-12",
                    children: Object(a.jsxs)("div", {
                      className: "view-all-courses-image",
                      children: [
                        Object(a.jsx)("img", {
                          src: "/images/woman-with-book.png",
                          alt: "image",
                        }),
                        Object(a.jsx)("div", {
                          className: "shape11",
                          "data-speed": "0.06",
                          "data-revert": "true",
                          children: Object(a.jsx)("img", {
                            src: "/images/shape10.png",
                            alt: "image",
                          }),
                        }),
                        Object(a.jsx)("div", {
                          className: "shape12",
                          "data-speed": "0.06",
                          "data-revert": "true",
                          children: Object(a.jsx)("img", {
                            src: "/images/shape11.png",
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
              className: "shape1",
              "data-speed": "0.06",
              "data-revert": "true",
              children: Object(a.jsx)("img", {
                src: "/images/shape1.png",
                alt: "image",
              }),
            }),
            Object(a.jsx)("div", {
              className: "shape9",
              "data-speed": "0.06",
              "data-revert": "true",
              children: Object(a.jsx)("img", {
                src: "/images/shape8.svg",
                alt: "image",
              }),
            }),
          ],
        });
      };
    },
    OvbP: function (e, s, c) {
      "use strict";
      var a = c("nKUr");
      c("q1tI");
      s.a = function () {
        return Object(a.jsxs)("div", {
          className: "slogan-area mtb-100 bg-fffaf3 ptb-100",
          children: [
            Object(a.jsx)("div", {
              className: "container",
              children: Object(a.jsxs)("div", {
                className: "row align-items-center",
                children: [
                  Object(a.jsx)("div", {
                    className: "col-lg-5 col-md-12",
                    children: Object(a.jsx)("div", {
                      className: "slogan-image",
                      children: Object(a.jsx)("img", {
                        src: "/images/man2.jpg",
                        alt: "image",
                      }),
                    }),
                  }),
                  Object(a.jsx)("div", {
                    className: "col-lg-7 col-md-12",
                    children: Object(a.jsxs)("div", {
                      className: "slogan-content",
                      children: [
                        Object(a.jsx)("p", {
                          children:
                            "Our project management training equips learners with the knowledge and discipline required to effectively plan, manage, execute, and control projects regardless of industry. You'll learn all about the most popular project management methodologies that help organizations deliver successful projects.",
                        }),
                        Object(a.jsx)("h3", { children: "William James" }),
                        Object(a.jsx)("span", {
                          className: "sub-title",
                          children: "CEO at eDemy",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            Object(a.jsx)("div", { className: "divider2" }),
            Object(a.jsx)("div", { className: "divider3" }),
            Object(a.jsx)("div", {
              className: "shape2",
              children: Object(a.jsx)("img", {
                src: "/images/shape2.png",
                alt: "image",
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
              className: "shape9",
              children: Object(a.jsx)("img", {
                src: "/images/shape8.svg",
                alt: "image",
              }),
            }),
          ],
        });
      };
    },
    SiyH: function (e, s, c) {
      "use strict";
      var a = c("rePB"),
        i = c("nKUr"),
        t = c("ODXe"),
        l = c("q1tI"),
        r = c.n(l),
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
      var o = c.n(n)()(
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
        var e = r.a.useState(!1),
          s = Object(t.a)(e, 2),
          c = s[0],
          a = s[1];
        return (
          r.a.useEffect(function () {
            a(!0);
          }, []),
          Object(i.jsx)("div", {
            className: "advisor-area bg-f9f9f9 pt-100",
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
                      o,
                      d(
                        d(
                          {
                            className: "advisor-slides owl-carousel owl-theme",
                          },
                          m
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
    VjNB: function (e, s, c) {
      "use strict";
      var a = c("nKUr"),
        i = c("ODXe"),
        t = c("q1tI"),
        l = c.n(t),
        r = c("YFqc"),
        n = c.n(r),
        j = c("Vvt1"),
        d = c.n(j)()(
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
        );
      s.a = function () {
        var e = l.a.useState(!1),
          s = Object(i.a)(e, 2),
          c = s[0],
          t = s[1];
        l.a.useEffect(function () {
          t(!0);
        }, []);
        var r = l.a.useState(!0),
          j = Object(i.a)(r, 2),
          o = j[0],
          m = j[1];
        return Object(a.jsx)(l.a.Fragment, {
          children: Object(a.jsxs)("div", {
            className: "about-area-two bg-fffaf3 pt-70 pb-100",
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
                            children:
                              "Build Your Project Management Skills Online, Anytime",
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
                          Object(a.jsx)(n.a, {
                            href: "/contact",
                            children: Object(a.jsx)("a", {
                              className: "link-btn",
                              children: "Explore Learning",
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(a.jsx)("div", {
                      className: "col-lg-7 col-md-12",
                      children: Object(a.jsxs)("div", {
                        className: "about-video-box",
                        children: [
                          Object(a.jsx)("div", {
                            className: "image",
                            children: Object(a.jsx)("img", {
                              src: "/images/about-img5.jpg",
                              alt: "image",
                            }),
                          }),
                          Object(a.jsx)(n.a, {
                            href: "#play-video",
                            children: Object(a.jsx)("a", {
                              onClick: function (e) {
                                e.preventDefault(), m(!o);
                              },
                              className: "video-btn popup-youtube",
                              children: Object(a.jsx)("i", {
                                className: "flaticon-play",
                              }),
                            }),
                          }),
                          Object(a.jsx)("div", {
                            className: "shape10",
                            children: Object(a.jsx)("img", {
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
              Object(a.jsx)("div", { className: "divider" }),
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
                className: "shape2",
                children: Object(a.jsx)("img", {
                  src: "/images/shape2.png",
                  alt: "image",
                }),
              }),
              c
                ? Object(a.jsx)(d, {
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
      };
    },
    cdGg: function (e, s, c) {
      "use strict";
      var a = c("nKUr"),
        i = (c("q1tI"), c("YFqc")),
        t = c.n(i);
      s.a = function () {
        return Object(a.jsx)("div", {
          className: "banner-section",
          children: Object(a.jsx)("div", {
            className: "container-fluid",
            children: Object(a.jsxs)("div", {
              className: "row align-items-center",
              children: [
                Object(a.jsx)("div", {
                  className: "col-lg-5 col-md-12",
                  children: Object(a.jsxs)("div", {
                    className: "banner-content",
                    children: [
                      Object(a.jsx)("h1", {
                        children: "Project Management Certification Training ",
                      }),
                      Object(a.jsx)("p", {
                        children:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
                      }),
                      Object(a.jsx)(t.a, {
                        href: "/profile-authentication",
                        children: Object(a.jsxs)("a", {
                          className: "default-btn",
                          children: [
                            Object(a.jsx)("i", { className: "flaticon-user" }),
                            " Join For Free ",
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
                    className: "banner-image",
                    children: [
                      Object(a.jsx)("img", {
                        src: "/images/banner-img1.png",
                        alt: "image",
                      }),
                      Object(a.jsx)("div", {
                        className: "banner-shape4",
                        children: Object(a.jsx)("img", {
                          src: "/images/banner-shape4.png",
                          alt: "image",
                        }),
                      }),
                      Object(a.jsx)("div", {
                        className: "banner-shape5",
                        children: Object(a.jsx)("img", {
                          src: "/images/banner-shape5.png",
                          alt: "image",
                        }),
                      }),
                      Object(a.jsx)("div", {
                        className: "banner-shape6",
                        children: Object(a.jsx)("img", {
                          src: "/images/banner-shape6.png",
                          alt: "image",
                        }),
                      }),
                      Object(a.jsx)("div", {
                        className: "banner-shape7",
                        children: Object(a.jsx)("img", {
                          src: "/images/banner-shape7.png",
                          alt: "image",
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
    "wh+f": function (e, s, c) {
      "use strict";
      var a = c("nKUr");
      c("q1tI");
      s.a = function () {
        return Object(a.jsx)("div", {
          className: "funfacts-area bg-f5f7fa",
          children: Object(a.jsx)("div", {
            className: "container",
            children: Object(a.jsxs)("div", {
              className: "row",
              children: [
                Object(a.jsx)("div", {
                  className: "col-lg-3 col-md-3 col-sm-6",
                  children: Object(a.jsxs)("div", {
                    className: "single-funfacts-item",
                    children: [
                      Object(a.jsx)("h3", { children: "1,926" }),
                      Object(a.jsx)("p", { children: "Finished Sessions" }),
                    ],
                  }),
                }),
                Object(a.jsx)("div", {
                  className: "col-lg-3 col-md-3 col-sm-6",
                  children: Object(a.jsxs)("div", {
                    className: "single-funfacts-item",
                    children: [
                      Object(a.jsx)("h3", { children: "3,279" }),
                      Object(a.jsx)("p", { children: "Enrolled Learners" }),
                    ],
                  }),
                }),
                Object(a.jsx)("div", {
                  className: "col-lg-3 col-md-3 col-sm-6",
                  children: Object(a.jsxs)("div", {
                    className: "single-funfacts-item",
                    children: [
                      Object(a.jsx)("h3", { children: "250" }),
                      Object(a.jsx)("p", { children: "Online Instructors" }),
                    ],
                  }),
                }),
                Object(a.jsx)("div", {
                  className: "col-lg-3 col-md-3 col-sm-6",
                  children: Object(a.jsxs)("div", {
                    className: "single-funfacts-item",
                    children: [
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
  },
]);
