_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [92],
  {
    "4gwA": function (e, s, c) {
      "use strict";
      c.r(s);
      var a = c("nKUr"),
        t = c("q1tI"),
        i = c.n(t),
        l = c("Ix5F"),
        n = c("ODXe"),
        r = function () {
          var e = i.a.useState(""),
            s = Object(n.a)(e, 2),
            c = s[0],
            t = s[1],
            l = i.a.useState(""),
            r = Object(n.a)(l, 2),
            j = r[0],
            d = r[1],
            b = i.a.useState(""),
            o = Object(n.a)(b, 2),
            x = o[0],
            m = o[1],
            h = i.a.useState(""),
            O = Object(n.a)(h, 2),
            u = O[0],
            g = O[1];
          i.a.useEffect(function () {
            var e = setInterval(function () {
              v();
            }, 1e3);
            return function () {
              return clearInterval(e);
            };
          }, []);
          var v = function () {
            var e = new Date("August 23, 2022 17:00:00 PDT"),
              s = Date.parse(e) / 1e3,
              c = new Date(),
              a = s - Date.parse(c) / 1e3,
              i = Math.floor(a / 86400),
              l = Math.floor((a - 86400 * i) / 3600),
              n = Math.floor((a - 86400 * i - 3600 * l) / 60),
              r = Math.floor(a - 86400 * i - 3600 * l - 60 * n);
            l < "10" && (l = "0" + l),
              n < "10" && (n = "0" + n),
              r < "10" && (r = "0" + r),
              t(i),
              d(l),
              m(n),
              g(r);
          };
          return Object(a.jsxs)("div", {
            id: "timer",
            className: "flex-wrap d-flex justify-content-center",
            children: [
              Object(a.jsxs)("div", {
                id: "days",
                className:
                  "align-items-center flex-column d-flex justify-content-center",
                children: [c, " ", Object(a.jsx)("span", { children: "Days" })],
              }),
              Object(a.jsxs)("div", {
                id: "hours",
                className:
                  "align-items-center flex-column d-flex justify-content-center",
                children: [
                  j,
                  " ",
                  Object(a.jsx)("span", { children: "Hours" }),
                ],
              }),
              Object(a.jsxs)("div", {
                id: "minutes",
                className:
                  "align-items-center flex-column d-flex justify-content-center",
                children: [
                  x,
                  " ",
                  Object(a.jsx)("span", { children: "Minutes" }),
                ],
              }),
              Object(a.jsxs)("div", {
                id: "seconds",
                className:
                  "align-items-center flex-column d-flex justify-content-center",
                children: [
                  u,
                  " ",
                  Object(a.jsx)("span", { children: "Seconds" }),
                ],
              }),
            ],
          });
        },
        j = c("YFqc"),
        d = c.n(j),
        b = function () {
          return Object(a.jsxs)("div", {
            className: "events-details-info",
            children: [
              Object(a.jsxs)("ul", {
                className: "info",
                children: [
                  Object(a.jsx)("li", {
                    className: "price",
                    children: Object(a.jsxs)("div", {
                      className:
                        "d-flex justify-content-between align-items-center",
                      children: [
                        Object(a.jsx)("span", { children: "Cost" }),
                        "$149",
                      ],
                    }),
                  }),
                  Object(a.jsx)("li", {
                    children: Object(a.jsxs)("div", {
                      className:
                        "d-flex justify-content-between align-items-center",
                      children: [
                        Object(a.jsx)("span", { children: "Total Slot" }),
                        "1500",
                      ],
                    }),
                  }),
                  Object(a.jsx)("li", {
                    children: Object(a.jsxs)("div", {
                      className:
                        "d-flex justify-content-between align-items-center",
                      children: [
                        Object(a.jsx)("span", { children: "Booked Slot" }),
                        "350",
                      ],
                    }),
                  }),
                  Object(a.jsx)("li", {
                    children: Object(a.jsxs)("div", {
                      className:
                        "d-flex justify-content-between align-items-center",
                      children: [
                        Object(a.jsx)("span", { children: "Pay With" }),
                        Object(a.jsxs)("div", {
                          className: "payment-method",
                          children: [
                            Object(a.jsx)("img", {
                              src: "/images/payment/payment1.png",
                              className: "shadow",
                              alt: "image",
                            }),
                            Object(a.jsx)("img", {
                              src: "/images/payment/payment2.png",
                              className: "shadow",
                              alt: "image",
                            }),
                            Object(a.jsx)("img", {
                              src: "/images/payment/payment3.png",
                              className: "shadow",
                              alt: "image",
                            }),
                            Object(a.jsx)("img", {
                              src: "/images/payment/payment4.png",
                              className: "shadow",
                              alt: "image",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              Object(a.jsxs)("div", {
                className: "btn-box",
                children: [
                  Object(a.jsx)(d.a, {
                    href: "#",
                    children: Object(a.jsxs)("a", {
                      className: "default-btn",
                      children: [
                        Object(a.jsx)("i", { className: "flaticon-user" }),
                        " Book Now ",
                        Object(a.jsx)("span", {}),
                      ],
                    }),
                  }),
                  Object(a.jsxs)("p", {
                    children: [
                      "You must ",
                      Object(a.jsx)(d.a, {
                        href: "#",
                        children: Object(a.jsx)("a", { children: "login" }),
                      }),
                      " before register event.",
                    ],
                  }),
                ],
              }),
              Object(a.jsx)("div", {
                className: "events-share",
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
          });
        },
        o = c("rePB"),
        x = c("Vvt1");
      function m(e, s) {
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
      function h(e) {
        for (var s = 1; s < arguments.length; s++) {
          var c = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? m(Object(c), !0).forEach(function (s) {
                Object(o.a)(e, s, c[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(c))
            : m(Object(c)).forEach(function (s) {
                Object.defineProperty(
                  e,
                  s,
                  Object.getOwnPropertyDescriptor(c, s)
                );
              });
        }
        return e;
      }
      var O = c.n(x)()(
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
        u = {
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
        },
        g = function () {
          var e = i.a.useState(!1),
            s = Object(n.a)(e, 2),
            c = s[0],
            t = s[1];
          return (
            i.a.useEffect(function () {
              t(!0);
            }, []),
            Object(a.jsx)("div", {
              className: "advisor-area bg-f9f9f9 ptb-100",
              children: Object(a.jsxs)("div", {
                className: "container",
                children: [
                  Object(a.jsx)("div", {
                    className: "section-title",
                    children: Object(a.jsx)("h2", {
                      children: "Event Participants",
                    }),
                  }),
                  c
                    ? Object(a.jsxs)(
                        O,
                        h(
                          h(
                            {
                              className:
                                "advisor-slides-two owl-carousel owl-theme",
                            },
                            u
                          ),
                          {},
                          {
                            children: [
                              Object(a.jsxs)("div", {
                                className: "single-advisor-item",
                                children: [
                                  Object(a.jsxs)("div", {
                                    className: "advisor-image",
                                    children: [
                                      Object(a.jsx)("img", {
                                        src: "/images/advisor/advisor4.jpg",
                                        alt: "image",
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
                                  Object(a.jsxs)("div", {
                                    className: "advisor-content",
                                    children: [
                                      Object(a.jsx)("h3", {
                                        children: Object(a.jsx)(d.a, {
                                          href: "#",
                                          children: Object(a.jsx)("a", {
                                            children: "James Andy",
                                          }),
                                        }),
                                      }),
                                      Object(a.jsx)("span", {
                                        children: "Project Management Expert",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(a.jsxs)("div", {
                                className: "single-advisor-item",
                                children: [
                                  Object(a.jsxs)("div", {
                                    className: "advisor-image",
                                    children: [
                                      Object(a.jsx)("img", {
                                        src: "/images/advisor/advisor5.jpg",
                                        alt: "image",
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
                                  Object(a.jsxs)("div", {
                                    className: "advisor-content",
                                    children: [
                                      Object(a.jsx)("h3", {
                                        children: Object(a.jsx)(d.a, {
                                          href: "#",
                                          children: Object(a.jsx)("a", {
                                            children: "Jassica Hische",
                                          }),
                                        }),
                                      }),
                                      Object(a.jsx)("span", {
                                        children: "Illustrator Expert",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(a.jsxs)("div", {
                                className: "single-advisor-item",
                                children: [
                                  Object(a.jsxs)("div", {
                                    className: "advisor-image",
                                    children: [
                                      Object(a.jsx)("img", {
                                        src: "/images/advisor/advisor6.jpg",
                                        alt: "image",
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
                                  Object(a.jsxs)("div", {
                                    className: "advisor-content",
                                    children: [
                                      Object(a.jsx)("h3", {
                                        children: Object(a.jsx)(d.a, {
                                          href: "#",
                                          children: Object(a.jsx)("a", {
                                            children: "Alister Cock",
                                          }),
                                        }),
                                      }),
                                      Object(a.jsx)("span", {
                                        children: "QA Project Expert",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(a.jsxs)("div", {
                                className: "single-advisor-item",
                                children: [
                                  Object(a.jsxs)("div", {
                                    className: "advisor-image",
                                    children: [
                                      Object(a.jsx)("img", {
                                        src: "/images/advisor/advisor7.jpg",
                                        alt: "image",
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
                                  Object(a.jsxs)("div", {
                                    className: "advisor-content",
                                    children: [
                                      Object(a.jsx)("h3", {
                                        children: Object(a.jsx)(d.a, {
                                          href: "#",
                                          children: Object(a.jsx)("a", {
                                            children: "Lina Ninja",
                                          }),
                                        }),
                                      }),
                                      Object(a.jsx)("span", {
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
      s.default = function () {
        return Object(a.jsxs)(i.a.Fragment, {
          children: [
            Object(a.jsx)(l.a, {
              pageTitle:
                "Global Conference on Business Management and Economics",
              homePageUrl: "/",
              homePageText: "Home",
              activePageText:
                "Global Conference on Business Management and Economics",
            }),
            Object(a.jsxs)("div", {
              className: "events-details-area pb-100",
              children: [
                Object(a.jsxs)("div", {
                  className: "events-details-image",
                  children: [
                    Object(a.jsx)("img", {
                      src: "/images/events/events-details.jpg",
                      alt: "image",
                    }),
                    Object(a.jsx)(r, {}),
                  ],
                }),
                Object(a.jsx)("div", {
                  className: "container",
                  children: Object(a.jsxs)("div", {
                    className: "row",
                    children: [
                      Object(a.jsxs)("div", {
                        className: "col-lg-8 col-md-12",
                        children: [
                          Object(a.jsx)("div", {
                            className: "events-details-header",
                            children: Object(a.jsxs)("ul", {
                              children: [
                                Object(a.jsxs)("li", {
                                  children: [
                                    Object(a.jsx)("i", {
                                      className: "bx bx-calendar",
                                    }),
                                    "Wed, 20 May, 2020",
                                  ],
                                }),
                                Object(a.jsxs)("li", {
                                  children: [
                                    Object(a.jsx)("i", {
                                      className: "bx bx-map",
                                    }),
                                    "Wed, 20 May, 2020",
                                  ],
                                }),
                                Object(a.jsxs)("li", {
                                  children: [
                                    Object(a.jsx)("i", {
                                      className: "bx bx-time",
                                    }),
                                    "Wed, 20 May, 2020",
                                  ],
                                }),
                              ],
                            }),
                          }),
                          Object(a.jsx)("div", {
                            className: "events-details-location",
                            children: Object(a.jsx)("div", {
                              id: "map",
                              children: Object(a.jsx)("iframe", {
                                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105913.76628212207!2d-117.46956773183814!3d33.946138126927174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dca6df7ff47dbb%3A0xf7a1d705135e0ae8!2sRiverside%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1592581354634!5m2!1sen!2sbd",
                              }),
                            }),
                          }),
                          Object(a.jsxs)("div", {
                            className: "events-details-desc",
                            children: [
                              Object(a.jsx)("h3", {
                                children: "About The Event",
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
                                children: "Where the event?",
                              }),
                              Object(a.jsx)("p", {
                                children:
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                              }),
                              Object(a.jsx)("h3", {
                                children: "Who this event is for?",
                              }),
                              Object(a.jsx)("p", {
                                children:
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(a.jsx)("div", {
                        className: "col-lg-4 col-md-12",
                        children: Object(a.jsx)(b, {}),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            Object(a.jsx)(g, {}),
          ],
        });
      };
    },
    Ix5F: function (e, s, c) {
      "use strict";
      var a = c("nKUr"),
        t = (c("q1tI"), c("YFqc")),
        i = c.n(t);
      s.a = function (e) {
        var s = e.pageTitle,
          c = e.homePageUrl,
          t = e.homePageText,
          l = e.activePageText;
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
                        children: Object(a.jsx)(i.a, {
                          href: c,
                          children: Object(a.jsx)("a", { children: t }),
                        }),
                      }),
                      Object(a.jsx)("li", { className: "active", children: l }),
                    ],
                  }),
                  Object(a.jsx)("h2", { children: s }),
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
    R7m3: function (e, s, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/single-events",
        function () {
          return c("4gwA");
        },
      ]);
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
  },
  [["R7m3", 1, 0, 2, 4]],
]);
