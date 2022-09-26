_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [90],
  {
    NmN8: function (e, s, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/single-courses-1",
        function () {
          return c("r6Bi");
        },
      ]);
    },
    n44G: function (e, s, c) {
      "use strict";
      var a = c("nKUr"),
        i = (c("q1tI"), c("YFqc")),
        t = c.n(i);
      s.a = function (e) {
        var s = e.pageTitle,
          c = e.homePageUrl,
          i = e.homePageText,
          l = e.innerPageUrl,
          n = e.innerPageText,
          r = e.activePageText;
        return Object(a.jsxs)("div", {
          className: "page-title-area",
          children: [
            Object(a.jsx)("div", {
              className: "container",
              children: Object(a.jsxs)("div", {
                className: "page-title-content",
                children: [
                  Object(a.jsxs)("ul", {
                    children: [
                      Object(a.jsx)("li", {
                        children: Object(a.jsx)(t.a, {
                          href: c,
                          children: Object(a.jsx)("a", { children: i }),
                        }),
                      }),
                      Object(a.jsx)("li", {
                        children: Object(a.jsx)(t.a, {
                          href: l,
                          children: Object(a.jsx)("a", { children: n }),
                        }),
                      }),
                      Object(a.jsx)("li", { className: "active", children: r }),
                    ],
                  }),
                  Object(a.jsx)("h2", { children: s }),
                  Object(a.jsxs)("div", {
                    className: "rating",
                    children: [
                      Object(a.jsx)("i", { className: "bx bxs-star" }),
                      Object(a.jsx)("i", { className: "bx bxs-star" }),
                      Object(a.jsx)("i", { className: "bx bxs-star" }),
                      Object(a.jsx)("i", { className: "bx bxs-star" }),
                      Object(a.jsx)("i", { className: "bx bxs-star" }),
                      Object(a.jsx)("div", {
                        className: "rating-count",
                        children: Object(a.jsx)("span", {
                          children: "4.0 (1 rating)",
                        }),
                      }),
                    ],
                  }),
                ],
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
    r6Bi: function (e, s, c) {
      "use strict";
      c.r(s);
      var a = c("nKUr"),
        i = c("q1tI"),
        t = c.n(i),
        l = c("n44G"),
        n = c("ODXe"),
        r = c("YFqc"),
        j = c.n(r),
        d = c("Vvt1"),
        b = c.n(d)()(
          function () {
            return Promise.all([c.e(0), c.e(6), c.e(27)]).then(
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
          var e = t.a.useState(!1),
            s = Object(n.a)(e, 2),
            c = s[0],
            i = s[1];
          t.a.useEffect(function () {
            i(!0);
          }, []);
          var l = t.a.useState(!0),
            r = Object(n.a)(l, 2),
            d = r[0],
            x = r[1];
          return Object(a.jsxs)(t.a.Fragment, {
            children: [
              c
                ? Object(a.jsx)(b, {
                    channel: "youtube",
                    isOpen: !d,
                    videoId: "bk7McNUjWgw",
                    onClose: function () {
                      return x(!d);
                    },
                  })
                : "",
              Object(a.jsxs)("div", {
                className: "courses-details-info",
                children: [
                  Object(a.jsxs)("div", {
                    className: "image",
                    children: [
                      Object(a.jsx)("img", {
                        src: "/images/courses/courses1.jpg",
                        alt: "image",
                      }),
                      Object(a.jsx)("div", {
                        onClick: function (e) {
                          e.preventDefault(), x(!d);
                        },
                        className: "link-btn popup-youtube",
                      }),
                      Object(a.jsxs)("div", {
                        className: "content",
                        children: [
                          Object(a.jsx)("i", { className: "flaticon-play" }),
                          Object(a.jsx)("span", { children: "Course Preview" }),
                        ],
                      }),
                    ],
                  }),
                  Object(a.jsxs)("ul", {
                    className: "info",
                    children: [
                      Object(a.jsx)("li", {
                        className: "price",
                        children: Object(a.jsxs)("div", {
                          className:
                            "d-flex justify-content-between align-items-center",
                          children: [
                            Object(a.jsxs)("span", {
                              children: [
                                Object(a.jsx)("i", {
                                  className: "flaticon-tag",
                                }),
                                " Price",
                              ],
                            }),
                            "$49",
                          ],
                        }),
                      }),
                      Object(a.jsx)("li", {
                        children: Object(a.jsxs)("div", {
                          className:
                            "d-flex justify-content-between align-items-center",
                          children: [
                            Object(a.jsxs)("span", {
                              children: [
                                Object(a.jsx)("i", {
                                  className: "flaticon-teacher",
                                }),
                                " Instructor",
                              ],
                            }),
                            "Sarah Taylor",
                          ],
                        }),
                      }),
                      Object(a.jsx)("li", {
                        children: Object(a.jsxs)("div", {
                          className:
                            "d-flex justify-content-between align-items-center",
                          children: [
                            Object(a.jsxs)("span", {
                              children: [
                                Object(a.jsx)("i", {
                                  className: "flaticon-time",
                                }),
                                " Duration",
                              ],
                            }),
                            "7 weeks",
                          ],
                        }),
                      }),
                      Object(a.jsx)("li", {
                        children: Object(a.jsxs)("div", {
                          className:
                            "d-flex justify-content-between align-items-center",
                          children: [
                            Object(a.jsxs)("span", {
                              children: [
                                Object(a.jsx)("i", {
                                  className: "flaticon-distance-learning",
                                }),
                                " ",
                                "Lessons",
                              ],
                            }),
                            "25",
                          ],
                        }),
                      }),
                      Object(a.jsx)("li", {
                        children: Object(a.jsxs)("div", {
                          className:
                            "d-flex justify-content-between align-items-center",
                          children: [
                            Object(a.jsxs)("span", {
                              children: [
                                Object(a.jsx)("i", {
                                  className: "flaticon-web",
                                }),
                                " Enrolled",
                              ],
                            }),
                            "255 students",
                          ],
                        }),
                      }),
                      Object(a.jsx)("li", {
                        children: Object(a.jsxs)("div", {
                          className:
                            "d-flex justify-content-between align-items-center",
                          children: [
                            Object(a.jsxs)("span", {
                              children: [
                                Object(a.jsx)("i", {
                                  className: "flaticon-lock",
                                }),
                                " Access",
                              ],
                            }),
                            "Lifetime",
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(a.jsxs)("div", {
                    className: "btn-box",
                    children: [
                      Object(a.jsx)(j.a, {
                        href: "#",
                        children: Object(a.jsxs)("a", {
                          className: "default-btn",
                          children: [
                            Object(a.jsx)("i", {
                              className: "flaticon-shopping-cart",
                            }),
                            " Add to Cart ",
                            Object(a.jsx)("span", {}),
                          ],
                        }),
                      }),
                      Object(a.jsx)(j.a, {
                        href: "#",
                        children: Object(a.jsxs)("a", {
                          className: "default-btn",
                          children: [
                            Object(a.jsx)("i", { className: "flaticon-tag" }),
                            " Buy Now",
                            " ",
                            Object(a.jsx)("span", {}),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(a.jsx)("div", {
                    className: "courses-share",
                    children: Object(a.jsxs)("div", {
                      className: "share-info",
                      children: [
                        Object(a.jsxs)("span", {
                          children: [
                            "Share This Course ",
                            Object(a.jsx)("i", { className: "flaticon-share" }),
                          ],
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
            ],
          });
        },
        m = c("rIL+"),
        o = c("GTV5");
      Object(o.e)();
      s.default = function () {
        return Object(a.jsxs)(t.a.Fragment, {
          children: [
            Object(a.jsx)(l.a, {
              pageTitle:
                "Python for Finance: Investment Fundamentals & Data Analytics",
              homePageUrl: "/",
              homePageText: "Home",
              innerPageUrl: "/courses-1",
              innerPageText: "Courses",
              activePageText:
                "Python for Finance: Investment Fundamentals & Data Analytics",
            }),
            Object(a.jsxs)("div", {
              className: "courses-details-area pb-100",
              children: [
                Object(a.jsx)("div", {
                  className: "courses-details-image",
                  children: Object(a.jsx)("img", {
                    src: "/images/courses/course-details.jpg",
                    alt: "image",
                  }),
                }),
                Object(a.jsx)("div", {
                  className: "container",
                  children: Object(a.jsxs)("div", {
                    className: "row",
                    children: [
                      Object(a.jsx)("div", {
                        className: "col-lg-8 col-md-12",
                        children: Object(a.jsx)("div", {
                          className: "courses-details-desc",
                          children: Object(a.jsxs)(o.d, {
                            children: [
                              Object(a.jsxs)(o.b, {
                                children: [
                                  Object(a.jsx)(o.a, { children: "Overview" }),
                                  Object(a.jsx)(o.a, {
                                    children: "Curriculum",
                                  }),
                                  Object(a.jsx)(o.a, {
                                    children: "Instructor",
                                  }),
                                  Object(a.jsx)(o.a, { children: "Reviews" }),
                                ],
                              }),
                              Object(a.jsx)(o.c, {
                                children: Object(a.jsxs)("div", {
                                  className: "courses-overview",
                                  children: [
                                    Object(a.jsx)("h3", {
                                      children: "Course Description",
                                    }),
                                    Object(a.jsx)("p", {
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                                    }),
                                    Object(a.jsx)("p", {
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                                    }),
                                    Object(a.jsx)("h3", {
                                      children: "Certification",
                                    }),
                                    Object(a.jsx)("p", {
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                                    }),
                                    Object(a.jsx)("h3", {
                                      children: "Who this course is for",
                                    }),
                                    Object(a.jsx)("p", {
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                                    }),
                                  ],
                                }),
                              }),
                              Object(a.jsx)(o.c, {
                                children: Object(a.jsxs)("div", {
                                  className: "courses-curriculum",
                                  children: [
                                    Object(a.jsx)("h3", {
                                      children: "Python Introduction",
                                    }),
                                    Object(a.jsx)("ul", {
                                      children: Object(a.jsx)("li", {
                                        children: Object(a.jsxs)("a", {
                                          href: "#",
                                          className:
                                            "d-flex justify-content-between align-items-center",
                                          children: [
                                            Object(a.jsx)("span", {
                                              className: "courses-name",
                                              children: "Python Introduction",
                                            }),
                                            Object(a.jsxs)("div", {
                                              className: "courses-meta",
                                              children: [
                                                Object(a.jsx)("span", {
                                                  className: "questions",
                                                  children: "5 questions",
                                                }),
                                                Object(a.jsx)("span", {
                                                  className: "duration",
                                                  children: "01 Hour",
                                                }),
                                                Object(a.jsx)("span", {
                                                  className: "status",
                                                  children: "Preview",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    Object(a.jsx)("h3", {
                                      children:
                                        "Stepping into the World of Python",
                                    }),
                                    Object(a.jsxs)("ul", {
                                      children: [
                                        Object(a.jsx)("li", {
                                          children: Object(a.jsxs)("a", {
                                            href: "#",
                                            className:
                                              "d-flex justify-content-between align-items-center",
                                            children: [
                                              Object(a.jsx)("span", {
                                                className: "courses-name",
                                                children: "NumPy Introduction",
                                              }),
                                              Object(a.jsxs)("div", {
                                                className: "courses-meta",
                                                children: [
                                                  Object(a.jsx)("span", {
                                                    className: "duration",
                                                    children: "15 Min",
                                                  }),
                                                  Object(a.jsx)("span", {
                                                    className: "status locked",
                                                    children: Object(a.jsx)(
                                                      "i",
                                                      {
                                                        className:
                                                          "flaticon-password",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        Object(a.jsx)("li", {
                                          children: Object(a.jsxs)("a", {
                                            href: "#",
                                            className:
                                              "d-flex justify-content-between align-items-center",
                                            children: [
                                              Object(a.jsx)("span", {
                                                className: "courses-name",
                                                children:
                                                  "NumPy Getting Started",
                                              }),
                                              Object(a.jsxs)("div", {
                                                className: "courses-meta",
                                                children: [
                                                  Object(a.jsx)("span", {
                                                    className: "duration",
                                                    children: "30 Min",
                                                  }),
                                                  Object(a.jsx)("span", {
                                                    className: "status locked",
                                                    children: Object(a.jsx)(
                                                      "i",
                                                      {
                                                        className:
                                                          "flaticon-password",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        Object(a.jsx)("li", {
                                          children: Object(a.jsxs)("a", {
                                            href: "#",
                                            className:
                                              "d-flex justify-content-between align-items-center",
                                            children: [
                                              Object(a.jsx)("span", {
                                                className: "courses-name",
                                                children:
                                                  "NumPy Creating Arrays",
                                              }),
                                              Object(a.jsxs)("div", {
                                                className: "courses-meta",
                                                children: [
                                                  Object(a.jsx)("span", {
                                                    className: "duration",
                                                    children: "45 Min",
                                                  }),
                                                  Object(a.jsx)("span", {
                                                    className: "status locked",
                                                    children: Object(a.jsx)(
                                                      "i",
                                                      {
                                                        className:
                                                          "flaticon-password",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        Object(a.jsx)("li", {
                                          children: Object(a.jsxs)("a", {
                                            href: "#",
                                            className:
                                              "d-flex justify-content-between align-items-center",
                                            children: [
                                              Object(a.jsx)("span", {
                                                className: "courses-name",
                                                children:
                                                  "NumPy Array Indexing",
                                              }),
                                              Object(a.jsxs)("div", {
                                                className: "courses-meta",
                                                children: [
                                                  Object(a.jsx)("span", {
                                                    className: "questions",
                                                    children: "4 questions",
                                                  }),
                                                  Object(a.jsx)("span", {
                                                    className: "duration",
                                                    children: "1 Hour",
                                                  }),
                                                  Object(a.jsx)("span", {
                                                    className: "status locked",
                                                    children: Object(a.jsx)(
                                                      "i",
                                                      {
                                                        className:
                                                          "flaticon-password",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        Object(a.jsx)("li", {
                                          children: Object(a.jsxs)("a", {
                                            href: "#",
                                            className:
                                              "d-flex justify-content-between align-items-center",
                                            children: [
                                              Object(a.jsx)("span", {
                                                className: "courses-name",
                                                children: "NumPy Array Slicing",
                                              }),
                                              Object(a.jsxs)("div", {
                                                className: "courses-meta",
                                                children: [
                                                  Object(a.jsx)("span", {
                                                    className: "duration",
                                                    children: "1.5 Hour",
                                                  }),
                                                  Object(a.jsx)("span", {
                                                    className: "status locked",
                                                    children: Object(a.jsx)(
                                                      "i",
                                                      {
                                                        className:
                                                          "flaticon-password",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    Object(a.jsx)("h3", {
                                      children: "Python MySQL",
                                    }),
                                    Object(a.jsxs)("ul", {
                                      children: [
                                        Object(a.jsx)("li", {
                                          children: Object(a.jsxs)("a", {
                                            href: "#",
                                            className:
                                              "d-flex justify-content-between align-items-center",
                                            children: [
                                              Object(a.jsx)("span", {
                                                className: "courses-name",
                                                children: "Python MySQL",
                                              }),
                                              Object(a.jsxs)("div", {
                                                className: "courses-meta",
                                                children: [
                                                  Object(a.jsx)("span", {
                                                    className: "duration",
                                                    children: "01 Hour",
                                                  }),
                                                  Object(a.jsx)("span", {
                                                    className: "status locked",
                                                    children: Object(a.jsx)(
                                                      "i",
                                                      {
                                                        className:
                                                          "flaticon-password",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        Object(a.jsx)("li", {
                                          children: Object(a.jsxs)("a", {
                                            href: "#",
                                            className:
                                              "d-flex justify-content-between align-items-center",
                                            children: [
                                              Object(a.jsx)("span", {
                                                className: "courses-name",
                                                children:
                                                  "Python MySQL Create Database",
                                              }),
                                              Object(a.jsxs)("div", {
                                                className: "courses-meta",
                                                children: [
                                                  Object(a.jsx)("span", {
                                                    className: "questions",
                                                    children: "3 questions",
                                                  }),
                                                  Object(a.jsx)("span", {
                                                    className: "duration",
                                                    children: "1.1 Hour",
                                                  }),
                                                  Object(a.jsx)("span", {
                                                    className: "status locked",
                                                    children: Object(a.jsx)(
                                                      "i",
                                                      {
                                                        className:
                                                          "flaticon-password",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        Object(a.jsx)("li", {
                                          children: Object(a.jsxs)("a", {
                                            href: "#",
                                            className:
                                              "d-flex justify-content-between align-items-center",
                                            children: [
                                              Object(a.jsx)("span", {
                                                className: "courses-name",
                                                children:
                                                  "Python MySQL Create Table",
                                              }),
                                              Object(a.jsxs)("div", {
                                                className: "courses-meta",
                                                children: [
                                                  Object(a.jsx)("span", {
                                                    className: "duration",
                                                    children: "1.5 Hour",
                                                  }),
                                                  Object(a.jsx)("span", {
                                                    className: "status locked",
                                                    children: Object(a.jsx)(
                                                      "i",
                                                      {
                                                        className:
                                                          "flaticon-password",
                                                      }
                                                    ),
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
                              Object(a.jsx)(o.c, {
                                children: Object(a.jsx)("div", {
                                  className: "courses-instructor",
                                  children: Object(a.jsx)("div", {
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
                                                children: "Sarah Taylor",
                                              }),
                                              Object(a.jsx)("span", {
                                                className: "sub-title",
                                                children:
                                                  "Agile Project Expert",
                                              }),
                                              Object(a.jsx)("p", {
                                                children:
                                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                                              }),
                                              Object(a.jsxs)("ul", {
                                                className: "social-link",
                                                children: [
                                                  Object(a.jsx)("li", {
                                                    children: Object(a.jsx)(
                                                      "a",
                                                      {
                                                        href: "#",
                                                        className: "d-block",
                                                        target: "_blank",
                                                        children: Object(a.jsx)(
                                                          "i",
                                                          {
                                                            className:
                                                              "bx bxl-facebook",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  Object(a.jsx)("li", {
                                                    children: Object(a.jsx)(
                                                      "a",
                                                      {
                                                        href: "#",
                                                        className: "d-block",
                                                        target: "_blank",
                                                        children: Object(a.jsx)(
                                                          "i",
                                                          {
                                                            className:
                                                              "bx bxl-twitter",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  Object(a.jsx)("li", {
                                                    children: Object(a.jsx)(
                                                      "a",
                                                      {
                                                        href: "#",
                                                        className: "d-block",
                                                        target: "_blank",
                                                        children: Object(a.jsx)(
                                                          "i",
                                                          {
                                                            className:
                                                              "bx bxl-instagram",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  Object(a.jsx)("li", {
                                                    children: Object(a.jsx)(
                                                      "a",
                                                      {
                                                        href: "#",
                                                        className: "d-block",
                                                        target: "_blank",
                                                        children: Object(a.jsx)(
                                                          "i",
                                                          {
                                                            className:
                                                              "bx bxl-linkedin",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                              Object(a.jsxs)(o.c, {
                                children: [
                                  Object(a.jsxs)("div", {
                                    className: "courses-reviews",
                                    children: [
                                      Object(a.jsx)("h3", {
                                        children: "Course Rating",
                                      }),
                                      Object(a.jsxs)("div", {
                                        className: "rating",
                                        children: [
                                          Object(a.jsx)("span", {
                                            className: "bx bxs-star checked",
                                          }),
                                          Object(a.jsx)("span", {
                                            className: "bx bxs-star checked",
                                          }),
                                          Object(a.jsx)("span", {
                                            className: "bx bxs-star checked",
                                          }),
                                          Object(a.jsx)("span", {
                                            className: "bx bxs-star checked",
                                          }),
                                          Object(a.jsx)("span", {
                                            className: "bx bxs-star",
                                          }),
                                        ],
                                      }),
                                      Object(a.jsx)("div", {
                                        className: "rating-count",
                                        children: Object(a.jsx)("span", {
                                          children:
                                            "4.1 average based on 4 reviews.",
                                        }),
                                      }),
                                      Object(a.jsxs)("div", {
                                        className: "row",
                                        children: [
                                          Object(a.jsx)("div", {
                                            className: "side",
                                            children: Object(a.jsx)("div", {
                                              children: "5 star",
                                            }),
                                          }),
                                          Object(a.jsx)("div", {
                                            className: "middle",
                                            children: Object(a.jsx)("div", {
                                              className: "bar-container",
                                              children: Object(a.jsx)("div", {
                                                className: "bar-5",
                                              }),
                                            }),
                                          }),
                                          Object(a.jsx)("div", {
                                            className: "side right",
                                            children: Object(a.jsx)("div", {
                                              children: "02",
                                            }),
                                          }),
                                          Object(a.jsx)("div", {
                                            className: "side",
                                            children: Object(a.jsx)("div", {
                                              children: "4 star",
                                            }),
                                          }),
                                          Object(a.jsx)("div", {
                                            className: "middle",
                                            children: Object(a.jsx)("div", {
                                              className: "bar-container",
                                              children: Object(a.jsx)("div", {
                                                className: "bar-4",
                                              }),
                                            }),
                                          }),
                                          Object(a.jsx)("div", {
                                            className: "side right",
                                            children: Object(a.jsx)("div", {
                                              children: "03",
                                            }),
                                          }),
                                          Object(a.jsx)("div", {
                                            className: "side",
                                            children: Object(a.jsx)("div", {
                                              children: "3 star",
                                            }),
                                          }),
                                          Object(a.jsx)("div", {
                                            className: "middle",
                                            children: Object(a.jsx)("div", {
                                              className: "bar-container",
                                              children: Object(a.jsx)("div", {
                                                className: "bar-3",
                                              }),
                                            }),
                                          }),
                                          Object(a.jsx)("div", {
                                            className: "side right",
                                            children: Object(a.jsx)("div", {
                                              children: "04",
                                            }),
                                          }),
                                          Object(a.jsx)("div", {
                                            className: "side",
                                            children: Object(a.jsx)("div", {
                                              children: "2 star",
                                            }),
                                          }),
                                          Object(a.jsx)("div", {
                                            className: "middle",
                                            children: Object(a.jsx)("div", {
                                              className: "bar-container",
                                              children: Object(a.jsx)("div", {
                                                className: "bar-2",
                                              }),
                                            }),
                                          }),
                                          Object(a.jsx)("div", {
                                            className: "side right",
                                            children: Object(a.jsx)("div", {
                                              children: "05",
                                            }),
                                          }),
                                          Object(a.jsx)("div", {
                                            className: "side",
                                            children: Object(a.jsx)("div", {
                                              children: "1 star",
                                            }),
                                          }),
                                          Object(a.jsx)("div", {
                                            className: "middle",
                                            children: Object(a.jsx)("div", {
                                              className: "bar-container",
                                              children: Object(a.jsx)("div", {
                                                className: "bar-1",
                                              }),
                                            }),
                                          }),
                                          Object(a.jsx)("div", {
                                            className: "side right",
                                            children: Object(a.jsx)("div", {
                                              children: "00",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  Object(a.jsxs)("div", {
                                    className: "courses-review-comments",
                                    children: [
                                      Object(a.jsx)("h3", {
                                        children: "3 Reviews",
                                      }),
                                      Object(a.jsxs)("div", {
                                        className: "user-review",
                                        children: [
                                          Object(a.jsx)("img", {
                                            src: "/images/user1.jpg",
                                            alt: "image",
                                          }),
                                          Object(a.jsxs)("div", {
                                            className: "review-rating",
                                            children: [
                                              Object(a.jsxs)("div", {
                                                className: "review-stars",
                                                children: [
                                                  Object(a.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(a.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(a.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(a.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(a.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                ],
                                              }),
                                              Object(a.jsx)("span", {
                                                className: "d-inline-block",
                                                children: "James Anderson",
                                              }),
                                            ],
                                          }),
                                          Object(a.jsx)("span", {
                                            className: "d-block sub-comment",
                                            children: "Excellent",
                                          }),
                                          Object(a.jsx)("p", {
                                            children:
                                              "Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.",
                                          }),
                                        ],
                                      }),
                                      Object(a.jsxs)("div", {
                                        className: "user-review",
                                        children: [
                                          Object(a.jsx)("img", {
                                            src: "/images/user2.jpg",
                                            alt: "image",
                                          }),
                                          Object(a.jsxs)("div", {
                                            className: "review-rating",
                                            children: [
                                              Object(a.jsxs)("div", {
                                                className: "review-stars",
                                                children: [
                                                  Object(a.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(a.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(a.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(a.jsx)("i", {
                                                    className: "bx bxs-star",
                                                  }),
                                                  Object(a.jsx)("i", {
                                                    className: "bx bxs-star",
                                                  }),
                                                ],
                                              }),
                                              Object(a.jsx)("span", {
                                                className: "d-inline-block",
                                                children: "Sarah Taylor",
                                              }),
                                            ],
                                          }),
                                          Object(a.jsx)("span", {
                                            className: "d-block sub-comment",
                                            children: "Video Quality!",
                                          }),
                                          Object(a.jsx)("p", {
                                            children:
                                              "Was really easy to implement and they quickly answer my additional questions!",
                                          }),
                                        ],
                                      }),
                                      Object(a.jsxs)("div", {
                                        className: "user-review",
                                        children: [
                                          Object(a.jsx)("img", {
                                            src: "/images/user3.jpg",
                                            alt: "image",
                                          }),
                                          Object(a.jsxs)("div", {
                                            className: "review-rating",
                                            children: [
                                              Object(a.jsxs)("div", {
                                                className: "review-stars",
                                                children: [
                                                  Object(a.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(a.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(a.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(a.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(a.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                ],
                                              }),
                                              Object(a.jsx)("span", {
                                                className: "d-inline-block",
                                                children: "David Warner",
                                              }),
                                            ],
                                          }),
                                          Object(a.jsx)("span", {
                                            className: "d-block sub-comment",
                                            children: "Perfect Coding!",
                                          }),
                                          Object(a.jsx)("p", {
                                            children:
                                              "Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.",
                                          }),
                                        ],
                                      }),
                                      Object(a.jsxs)("div", {
                                        className: "user-review",
                                        children: [
                                          Object(a.jsx)("img", {
                                            src: "/images/user4.jpg",
                                            alt: "image",
                                          }),
                                          Object(a.jsxs)("div", {
                                            className: "review-rating",
                                            children: [
                                              Object(a.jsxs)("div", {
                                                className: "review-stars",
                                                children: [
                                                  Object(a.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(a.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(a.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(a.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(a.jsx)("i", {
                                                    className: "bx bxs-star",
                                                  }),
                                                ],
                                              }),
                                              Object(a.jsx)("span", {
                                                className: "d-inline-block",
                                                children: "King Kong",
                                              }),
                                            ],
                                          }),
                                          Object(a.jsx)("span", {
                                            className: "d-block sub-comment",
                                            children: "Perfect Video!",
                                          }),
                                          Object(a.jsx)("p", {
                                            children:
                                              "Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      Object(a.jsx)("div", {
                        className: "col-lg-4 col-md-12",
                        children: Object(a.jsx)(x, {}),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            Object(a.jsx)(m.a, {}),
          ],
        });
      };
    },
    "rIL+": function (e, s, c) {
      "use strict";
      var a = c("nKUr"),
        i = (c("q1tI"), c("YFqc")),
        t = c.n(i);
      s.a = function () {
        return Object(a.jsx)("div", {
          className: "courses-area bg-f8f9f8 pt-100 pb-70",
          children: Object(a.jsxs)("div", {
            className: "container",
            children: [
              Object(a.jsx)("div", {
                className: "section-title",
                children: Object(a.jsx)("h2", {
                  children: "More Courses You Might Like",
                }),
              }),
              Object(a.jsxs)("div", {
                className: "row",
                children: [
                  Object(a.jsx)("div", {
                    className: "col-lg-4 col-md-6",
                    children: Object(a.jsxs)("div", {
                      className: "single-courses-box",
                      children: [
                        Object(a.jsxs)("div", {
                          className: "courses-image",
                          children: [
                            Object(a.jsx)(t.a, {
                              href: "/single-courses-1",
                              children: Object(a.jsx)("a", {
                                className: "d-block image",
                                children: Object(a.jsx)("img", {
                                  src: "/images/courses/courses1.jpg",
                                  alt: "image",
                                }),
                              }),
                            }),
                            Object(a.jsx)("a", {
                              href: "#",
                              className: "fav",
                              children: Object(a.jsx)("i", {
                                className: "flaticon-heart",
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
                                href: "/single-courses-1",
                                children: Object(a.jsx)("a", {
                                  children:
                                    "The Data Science Course 2020: Complete Data Science Bootcamp",
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
                      className: "single-courses-box",
                      children: [
                        Object(a.jsxs)("div", {
                          className: "courses-image",
                          children: [
                            Object(a.jsx)(t.a, {
                              href: "/single-courses-1",
                              children: Object(a.jsx)("a", {
                                className: "d-block image",
                                children: Object(a.jsx)("img", {
                                  src: "/images/courses/courses2.jpg",
                                  alt: "image",
                                }),
                              }),
                            }),
                            Object(a.jsx)("a", {
                              href: "#",
                              className: "fav",
                              children: Object(a.jsx)("i", {
                                className: "flaticon-heart",
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
                                href: "/single-courses-1",
                                children: Object(a.jsx)("a", {
                                  children:
                                    "Java Programming MasterclassName for Software Developers",
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
                      className: "single-courses-box",
                      children: [
                        Object(a.jsxs)("div", {
                          className: "courses-image",
                          children: [
                            Object(a.jsx)(t.a, {
                              href: "/single-courses-1",
                              children: Object(a.jsx)("a", {
                                className: "d-block image",
                                children: Object(a.jsx)("img", {
                                  src: "/images/courses/courses3.jpg",
                                  alt: "image",
                                }),
                              }),
                            }),
                            Object(a.jsx)("a", {
                              href: "#",
                              className: "fav",
                              children: Object(a.jsx)("i", {
                                className: "flaticon-heart",
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
                                href: "/single-courses-1",
                                children: Object(a.jsx)("a", {
                                  children:
                                    "Deep Learning A-Z\u2122: Hands-On Artificial Neural Networks",
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
        });
      };
    },
  },
  [["NmN8", 1, 0, 2, 4, 10]],
]);
