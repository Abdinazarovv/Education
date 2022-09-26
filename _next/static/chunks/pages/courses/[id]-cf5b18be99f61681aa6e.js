_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [58],
  {
    CLJu: function (e, s, t) {
      "use strict";
      t.r(s);
      var c = t("o0o1"),
        a = t.n(c),
        i = t("HaE+"),
        n = t("rePB"),
        r = t("nKUr"),
        l = t("q1tI"),
        o = t.n(l),
        d = t("n44G"),
        j = t("ODXe"),
        b = t("Vvt1"),
        u = t.n(b),
        h = t("vDqi"),
        x = t.n(h),
        m = t("p46w"),
        p = t.n(m),
        O = t("dP/F"),
        f = t.n(O),
        g = function (e) {
          var s = e.handleCheckout,
            t = e.image,
            c = e.name,
            a = e.price,
            i = Number((100 * a).toFixed(2));
          return Object(r.jsx)("div", {
            children: Object(r.jsx)(f.a, {
              name: c,
              amount: i,
              image: t,
              currency: "USD",
              stripeKey: "pk_test_ZaZZWZGlvdIn12yFleIqyjSI00G4e18Kf7",
              token: s,
              triggerEvent: "onClick",
              children: Object(r.jsxs)("button", {
                className: "default-btn",
                children: [
                  Object(r.jsx)("i", { className: "flaticon-tag" }),
                  " Buy Now ",
                  Object(r.jsx)("span", {}),
                ],
              }),
            }),
          });
        },
        v = t("rjN7"),
        N = t("xUX2"),
        w = t("5I6T"),
        y = t("20a2"),
        k = u()(
          function () {
            return Promise.all([t.e(0), t.e(6), t.e(27)]).then(
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
        S = function (e) {
          var s = e.id,
            t = e.price,
            c = e.user,
            n = e.profilePhoto,
            l = e.lessons,
            d = e.duration,
            b = e.title,
            u = (e.course_preview_video, e.loggedInUser),
            h = o.a.useState(!1),
            m = Object(j.a)(h, 2),
            O = m[0],
            f = m[1];
          o.a.useEffect(function () {
            f(!0);
          }, []);
          var S = (u || "").enroled_courses,
            D = Object(y.useRouter)(),
            C = o.a.useState(0),
            P = Object(j.a)(C, 2),
            L = P[0],
            E = P[1],
            A = o.a.useState(!0),
            R = Object(j.a)(A, 2),
            M = R[0],
            T = R[1];
          o.a.useEffect(function () {
            (function () {
              var e = Object(i.a)(
                a.a.mark(function e() {
                  var t, c;
                  return a.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = ""
                              .concat(v.a, "/api/v1/courses/enrolled/")
                              .concat(s)),
                            (e.next = 3),
                            x.a.get(t)
                          );
                        case 3:
                          (c = e.sent), E(c.data);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []);
          var _ = (function () {
            var e = Object(i.a)(
              a.a.mark(function e(c) {
                var i, n, r, l, o, d;
                return a.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (i = p.a.get("token")),
                            (n = Number((100 * t).toFixed(2))),
                            (c.courseId = s),
                            (c.stripeTotal = n),
                            (r = "".concat(v.a, "/api/v1/courses/checkout")),
                            (l = { paymentData: c }),
                            (o = { headers: { Authorization: i } }),
                            (e.next = 10),
                            x.a.post(r, l, o)
                          );
                        case 10:
                          (d = e.sent), w.b.success(d.data), (e.next = 18);
                          break;
                        case 14:
                          (e.prev = 14),
                            (e.t0 = e.catch(0)),
                            Object(N.a)(e.t0, window.alert),
                            console.log(e.t0.message);
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 14]]
                );
              })
            );
            return function (s) {
              return e.apply(this, arguments);
            };
          })();
          return Object(r.jsxs)(o.a.Fragment, {
            children: [
              O
                ? Object(r.jsx)(k, {
                    channel: "youtube",
                    isOpen: !M,
                    videoId: "bk7McNUjWgw",
                    onClose: function () {
                      return T(!M);
                    },
                  })
                : "",
              Object(r.jsxs)("div", {
                className: "courses-details-info",
                children: [
                  Object(r.jsxs)("div", {
                    className: "image",
                    children: [
                      Object(r.jsx)("img", { src: n, alt: b }),
                      Object(r.jsx)("div", {
                        onClick: function (e) {
                          e.preventDefault(), T(!M);
                        },
                        className: "link-btn popup-youtube",
                      }),
                      Object(r.jsxs)("div", {
                        className: "content",
                        children: [
                          Object(r.jsx)("i", { className: "flaticon-play" }),
                          Object(r.jsx)("span", { children: "Course Preview" }),
                        ],
                      }),
                    ],
                  }),
                  Object(r.jsxs)("ul", {
                    className: "info",
                    children: [
                      Object(r.jsx)("li", {
                        className: "price",
                        children: Object(r.jsxs)("div", {
                          className:
                            "d-flex justify-content-between align-items-center",
                          children: [
                            Object(r.jsxs)("span", {
                              children: [
                                Object(r.jsx)("i", {
                                  className: "flaticon-tag",
                                }),
                                " Price",
                              ],
                            }),
                            "$",
                            t,
                          ],
                        }),
                      }),
                      Object(r.jsx)("li", {
                        children: Object(r.jsxs)("div", {
                          className:
                            "d-flex justify-content-between align-items-center",
                          children: [
                            Object(r.jsxs)("span", {
                              children: [
                                Object(r.jsx)("i", {
                                  className: "flaticon-teacher",
                                }),
                                " Instructor",
                              ],
                            }),
                            c.name,
                          ],
                        }),
                      }),
                      Object(r.jsx)("li", {
                        children: Object(r.jsxs)("div", {
                          className:
                            "d-flex justify-content-between align-items-center",
                          children: [
                            Object(r.jsxs)("span", {
                              children: [
                                Object(r.jsx)("i", {
                                  className: "flaticon-time",
                                }),
                                " Duration",
                              ],
                            }),
                            d,
                          ],
                        }),
                      }),
                      Object(r.jsx)("li", {
                        children: Object(r.jsxs)("div", {
                          className:
                            "d-flex justify-content-between align-items-center",
                          children: [
                            Object(r.jsxs)("span", {
                              children: [
                                Object(r.jsx)("i", {
                                  className: "flaticon-distance-learning",
                                }),
                                " ",
                                "Lessons",
                              ],
                            }),
                            parseInt(l),
                          ],
                        }),
                      }),
                      Object(r.jsx)("li", {
                        children: Object(r.jsxs)("div", {
                          className:
                            "d-flex justify-content-between align-items-center",
                          children: [
                            Object(r.jsxs)("span", {
                              children: [
                                Object(r.jsx)("i", {
                                  className: "flaticon-web",
                                }),
                                " Enrolled",
                              ],
                            }),
                            L,
                            " students",
                          ],
                        }),
                      }),
                      Object(r.jsx)("li", {
                        children: Object(r.jsxs)("div", {
                          className:
                            "d-flex justify-content-between align-items-center",
                          children: [
                            Object(r.jsxs)("span", {
                              children: [
                                Object(r.jsx)("i", {
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
                  Object(r.jsx)("div", {
                    className: "btn-box",
                    children: u
                      ? Object(r.jsx)(r.Fragment, {
                          children:
                            S.filter(function (e) {
                              return e.courseId === s;
                            }).length > 0
                              ? Object(r.jsxs)("button", {
                                  className: "default-btn",
                                  disabled: !0,
                                  children: [
                                    Object(r.jsx)("i", {
                                      className: "flaticon-tag",
                                    }),
                                    " Enrolled",
                                    " ",
                                    Object(r.jsx)("span", {}),
                                  ],
                                })
                              : Object(r.jsx)(g, {
                                  handleCheckout: _,
                                  image: n,
                                  name: b,
                                  price: t,
                                }),
                        })
                      : Object(r.jsxs)("button", {
                          className: "default-btn",
                          onClick: function () {
                            D.push("/authentication");
                          },
                          children: [
                            Object(r.jsx)("i", { className: "flaticon-tag" }),
                            " Login To Buy",
                            " ",
                            Object(r.jsx)("span", {}),
                          ],
                        }),
                  }),
                  Object(r.jsx)("div", {
                    className: "courses-share",
                    children: Object(r.jsxs)("div", {
                      className: "share-info",
                      children: [
                        Object(r.jsxs)("span", {
                          children: [
                            "Share This Course ",
                            Object(r.jsx)("i", { className: "flaticon-share" }),
                          ],
                        }),
                        Object(r.jsxs)("ul", {
                          className: "social-link",
                          children: [
                            Object(r.jsx)("li", {
                              children: Object(r.jsx)("a", {
                                href: "#",
                                className: "d-block",
                                target: "_blank",
                                children: Object(r.jsx)("i", {
                                  className: "bx bxl-facebook",
                                }),
                              }),
                            }),
                            Object(r.jsx)("li", {
                              children: Object(r.jsx)("a", {
                                href: "#",
                                className: "d-block",
                                target: "_blank",
                                children: Object(r.jsx)("i", {
                                  className: "bx bxl-twitter",
                                }),
                              }),
                            }),
                            Object(r.jsx)("li", {
                              children: Object(r.jsx)("a", {
                                href: "#",
                                className: "d-block",
                                target: "_blank",
                                children: Object(r.jsx)("i", {
                                  className: "bx bxl-instagram",
                                }),
                              }),
                            }),
                            Object(r.jsx)("li", {
                              children: Object(r.jsx)("a", {
                                href: "#",
                                className: "d-block",
                                target: "_blank",
                                children: Object(r.jsx)("i", {
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
        D = t("rIL+"),
        C = t("GTV5"),
        P = t("YFqc"),
        L = t.n(P),
        E = function (e) {
          var s = e.videos;
          return Object(r.jsxs)("div", {
            className: "courses-curriculum",
            children: [
              Object(r.jsx)("h3", { children: "Course Videos" }),
              s
                ? Object(r.jsx)("ul", {
                    children: s.map(function (e) {
                      return Object(r.jsx)(
                        "li",
                        {
                          children: Object(r.jsx)(L.a, {
                            href: "/courses",
                            children: Object(r.jsxs)("a", {
                              className:
                                "d-flex justify-content-between align-items-center",
                              onClick: function (e) {
                                return e.preventDefault();
                              },
                              children: [
                                Object(r.jsx)("span", {
                                  className: "courses-name",
                                  children: e.name,
                                }),
                                Object(r.jsx)("div", {
                                  className: "courses-meta",
                                  children: Object(r.jsx)("span", {
                                    className: "status locked",
                                    children: Object(r.jsx)("i", {
                                      className: "flaticon-password",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        },
                        e.id
                      );
                    }),
                  })
                : Object(r.jsx)("h3", { children: "No Videos" }),
            ],
          });
        };
      function A(e, s) {
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
      function R(e) {
        for (var s = 1; s < arguments.length; s++) {
          var t = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? A(Object(t), !0).forEach(function (s) {
                Object(n.a)(e, s, t[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (s) {
                Object.defineProperty(
                  e,
                  s,
                  Object.getOwnPropertyDescriptor(t, s)
                );
              });
        }
        return e;
      }
      Object(C.e)();
      var M = function (e) {
        var s = e.course,
          t = e.user;
        return Object(r.jsxs)(o.a.Fragment, {
          children: [
            Object(r.jsx)(d.a, {
              pageTitle: s.title,
              homePageUrl: "/",
              homePageText: "Home",
              innerPageUrl: "/courses-1",
              innerPageText: "Courses",
              activePageText: s.title,
            }),
            Object(r.jsxs)("div", {
              className: "courses-details-area pb-100",
              children: [
                Object(r.jsx)("div", {
                  className: "courses-details-image",
                  children: Object(r.jsx)("img", {
                    src: s.coverPhoto,
                    alt: s.title,
                  }),
                }),
                Object(r.jsx)("div", {
                  className: "container",
                  children: Object(r.jsxs)("div", {
                    className: "row",
                    children: [
                      Object(r.jsx)("div", {
                        className: "col-lg-8 col-md-12",
                        children: Object(r.jsx)("div", {
                          className: "courses-details-desc",
                          children: Object(r.jsxs)(C.d, {
                            children: [
                              Object(r.jsxs)(C.b, {
                                children: [
                                  Object(r.jsx)(C.a, { children: "Overview" }),
                                  Object(r.jsx)(C.a, {
                                    children: "Curriculum",
                                  }),
                                  Object(r.jsx)(C.a, {
                                    children: "Instructor",
                                  }),
                                  Object(r.jsx)(C.a, { children: "Reviews" }),
                                ],
                              }),
                              Object(r.jsx)(C.c, {
                                children: Object(r.jsxs)("div", {
                                  className: "courses-overview",
                                  children: [
                                    Object(r.jsx)("h3", {
                                      children: "Course Description",
                                    }),
                                    Object(r.jsx)("p", {
                                      children: s.overview,
                                    }),
                                  ],
                                }),
                              }),
                              Object(r.jsx)(C.c, {
                                children: Object(r.jsx)(E, {
                                  videos: s.videos,
                                }),
                              }),
                              Object(r.jsx)(C.c, {
                                children: Object(r.jsx)("div", {
                                  className: "courses-instructor",
                                  children: Object(r.jsx)("div", {
                                    className: "single-advisor-box",
                                    children: Object(r.jsxs)("div", {
                                      className: "row align-items-center",
                                      children: [
                                        Object(r.jsx)("div", {
                                          className: "col-lg-4 col-md-4",
                                          children: Object(r.jsx)("div", {
                                            className: "advisor-image",
                                            children: Object(r.jsx)("img", {
                                              src: "".concat(
                                                s.user.profilePhoto
                                                  ? s.user.profilePhoto
                                                  : "/images/advisor/advisor2.jpg"
                                              ),
                                              alt: s.user.name,
                                            }),
                                          }),
                                        }),
                                        Object(r.jsx)("div", {
                                          className: "col-lg-8 col-md-8",
                                          children: Object(r.jsxs)("div", {
                                            className: "advisor-content",
                                            children: [
                                              Object(r.jsx)("h3", {
                                                children: s.user.name,
                                              }),
                                              Object(r.jsx)("span", {
                                                className: "sub-title",
                                                children:
                                                  s.user.designation || "Empty",
                                              }),
                                              Object(r.jsx)("p", {
                                                children:
                                                  s.user.about || "Empty",
                                              }),
                                              Object(r.jsxs)("ul", {
                                                className: "social-link",
                                                children: [
                                                  Object(r.jsx)("li", {
                                                    children: Object(r.jsx)(
                                                      "a",
                                                      {
                                                        href:
                                                          s.user.fb_url || "#",
                                                        className: "d-block",
                                                        target: "_blank",
                                                        children: Object(r.jsx)(
                                                          "i",
                                                          {
                                                            className:
                                                              "bx bxl-facebook",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  Object(r.jsx)("li", {
                                                    children: Object(r.jsx)(
                                                      "a",
                                                      {
                                                        href:
                                                          s.user.tw_url || "#",
                                                        className: "d-block",
                                                        target: "_blank",
                                                        children: Object(r.jsx)(
                                                          "i",
                                                          {
                                                            className:
                                                              "bx bxl-twitter",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  Object(r.jsx)("li", {
                                                    children: Object(r.jsx)(
                                                      "a",
                                                      {
                                                        href:
                                                          s.user.insta_url ||
                                                          "#",
                                                        className: "d-block",
                                                        target: "_blank",
                                                        children: Object(r.jsx)(
                                                          "i",
                                                          {
                                                            className:
                                                              "bx bxl-instagram",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  Object(r.jsx)("li", {
                                                    children: Object(r.jsx)(
                                                      "a",
                                                      {
                                                        href:
                                                          s.user.in_url || "#",
                                                        className: "d-block",
                                                        target: "_blank",
                                                        children: Object(r.jsx)(
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
                              Object(r.jsxs)(C.c, {
                                children: [
                                  Object(r.jsxs)("div", {
                                    className: "courses-reviews",
                                    children: [
                                      Object(r.jsx)("h3", {
                                        children: "Course Rating",
                                      }),
                                      Object(r.jsxs)("div", {
                                        className: "rating",
                                        children: [
                                          Object(r.jsx)("span", {
                                            className: "bx bxs-star checked",
                                          }),
                                          Object(r.jsx)("span", {
                                            className: "bx bxs-star checked",
                                          }),
                                          Object(r.jsx)("span", {
                                            className: "bx bxs-star checked",
                                          }),
                                          Object(r.jsx)("span", {
                                            className: "bx bxs-star checked",
                                          }),
                                          Object(r.jsx)("span", {
                                            className: "bx bxs-star",
                                          }),
                                        ],
                                      }),
                                      Object(r.jsx)("div", {
                                        className: "rating-count",
                                        children: Object(r.jsx)("span", {
                                          children:
                                            "4.1 average based on 4 reviews.",
                                        }),
                                      }),
                                      Object(r.jsxs)("div", {
                                        className: "row",
                                        children: [
                                          Object(r.jsx)("div", {
                                            className: "side",
                                            children: Object(r.jsx)("div", {
                                              children: "5 star",
                                            }),
                                          }),
                                          Object(r.jsx)("div", {
                                            className: "middle",
                                            children: Object(r.jsx)("div", {
                                              className: "bar-container",
                                              children: Object(r.jsx)("div", {
                                                className: "bar-5",
                                              }),
                                            }),
                                          }),
                                          Object(r.jsx)("div", {
                                            className: "side right",
                                            children: Object(r.jsx)("div", {
                                              children: "02",
                                            }),
                                          }),
                                          Object(r.jsx)("div", {
                                            className: "side",
                                            children: Object(r.jsx)("div", {
                                              children: "4 star",
                                            }),
                                          }),
                                          Object(r.jsx)("div", {
                                            className: "middle",
                                            children: Object(r.jsx)("div", {
                                              className: "bar-container",
                                              children: Object(r.jsx)("div", {
                                                className: "bar-4",
                                              }),
                                            }),
                                          }),
                                          Object(r.jsx)("div", {
                                            className: "side right",
                                            children: Object(r.jsx)("div", {
                                              children: "03",
                                            }),
                                          }),
                                          Object(r.jsx)("div", {
                                            className: "side",
                                            children: Object(r.jsx)("div", {
                                              children: "3 star",
                                            }),
                                          }),
                                          Object(r.jsx)("div", {
                                            className: "middle",
                                            children: Object(r.jsx)("div", {
                                              className: "bar-container",
                                              children: Object(r.jsx)("div", {
                                                className: "bar-3",
                                              }),
                                            }),
                                          }),
                                          Object(r.jsx)("div", {
                                            className: "side right",
                                            children: Object(r.jsx)("div", {
                                              children: "04",
                                            }),
                                          }),
                                          Object(r.jsx)("div", {
                                            className: "side",
                                            children: Object(r.jsx)("div", {
                                              children: "2 star",
                                            }),
                                          }),
                                          Object(r.jsx)("div", {
                                            className: "middle",
                                            children: Object(r.jsx)("div", {
                                              className: "bar-container",
                                              children: Object(r.jsx)("div", {
                                                className: "bar-2",
                                              }),
                                            }),
                                          }),
                                          Object(r.jsx)("div", {
                                            className: "side right",
                                            children: Object(r.jsx)("div", {
                                              children: "05",
                                            }),
                                          }),
                                          Object(r.jsx)("div", {
                                            className: "side",
                                            children: Object(r.jsx)("div", {
                                              children: "1 star",
                                            }),
                                          }),
                                          Object(r.jsx)("div", {
                                            className: "middle",
                                            children: Object(r.jsx)("div", {
                                              className: "bar-container",
                                              children: Object(r.jsx)("div", {
                                                className: "bar-1",
                                              }),
                                            }),
                                          }),
                                          Object(r.jsx)("div", {
                                            className: "side right",
                                            children: Object(r.jsx)("div", {
                                              children: "00",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  Object(r.jsxs)("div", {
                                    className: "courses-review-comments",
                                    children: [
                                      Object(r.jsx)("h3", {
                                        children: "3 Reviews",
                                      }),
                                      Object(r.jsxs)("div", {
                                        className: "user-review",
                                        children: [
                                          Object(r.jsx)("img", {
                                            src: "/images/user1.jpg",
                                            alt: "image",
                                          }),
                                          Object(r.jsxs)("div", {
                                            className: "review-rating",
                                            children: [
                                              Object(r.jsxs)("div", {
                                                className: "review-stars",
                                                children: [
                                                  Object(r.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(r.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(r.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(r.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(r.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                ],
                                              }),
                                              Object(r.jsx)("span", {
                                                className: "d-inline-block",
                                                children: "James Anderson",
                                              }),
                                            ],
                                          }),
                                          Object(r.jsx)("span", {
                                            className: "d-block sub-comment",
                                            children: "Excellent",
                                          }),
                                          Object(r.jsx)("p", {
                                            children:
                                              "Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.",
                                          }),
                                        ],
                                      }),
                                      Object(r.jsxs)("div", {
                                        className: "user-review",
                                        children: [
                                          Object(r.jsx)("img", {
                                            src: "/images/user2.jpg",
                                            alt: "image",
                                          }),
                                          Object(r.jsxs)("div", {
                                            className: "review-rating",
                                            children: [
                                              Object(r.jsxs)("div", {
                                                className: "review-stars",
                                                children: [
                                                  Object(r.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(r.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(r.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(r.jsx)("i", {
                                                    className: "bx bxs-star",
                                                  }),
                                                  Object(r.jsx)("i", {
                                                    className: "bx bxs-star",
                                                  }),
                                                ],
                                              }),
                                              Object(r.jsx)("span", {
                                                className: "d-inline-block",
                                                children: "Sarah Taylor",
                                              }),
                                            ],
                                          }),
                                          Object(r.jsx)("span", {
                                            className: "d-block sub-comment",
                                            children: "Video Quality!",
                                          }),
                                          Object(r.jsx)("p", {
                                            children:
                                              "Was really easy to implement and they quickly answer my additional questions!",
                                          }),
                                        ],
                                      }),
                                      Object(r.jsxs)("div", {
                                        className: "user-review",
                                        children: [
                                          Object(r.jsx)("img", {
                                            src: "/images/user3.jpg",
                                            alt: "image",
                                          }),
                                          Object(r.jsxs)("div", {
                                            className: "review-rating",
                                            children: [
                                              Object(r.jsxs)("div", {
                                                className: "review-stars",
                                                children: [
                                                  Object(r.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(r.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(r.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(r.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(r.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                ],
                                              }),
                                              Object(r.jsx)("span", {
                                                className: "d-inline-block",
                                                children: "David Warner",
                                              }),
                                            ],
                                          }),
                                          Object(r.jsx)("span", {
                                            className: "d-block sub-comment",
                                            children: "Perfect Coding!",
                                          }),
                                          Object(r.jsx)("p", {
                                            children:
                                              "Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.",
                                          }),
                                        ],
                                      }),
                                      Object(r.jsxs)("div", {
                                        className: "user-review",
                                        children: [
                                          Object(r.jsx)("img", {
                                            src: "/images/user4.jpg",
                                            alt: "image",
                                          }),
                                          Object(r.jsxs)("div", {
                                            className: "review-rating",
                                            children: [
                                              Object(r.jsxs)("div", {
                                                className: "review-stars",
                                                children: [
                                                  Object(r.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(r.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(r.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(r.jsx)("i", {
                                                    className:
                                                      "bx bxs-star checked",
                                                  }),
                                                  Object(r.jsx)("i", {
                                                    className: "bx bxs-star",
                                                  }),
                                                ],
                                              }),
                                              Object(r.jsx)("span", {
                                                className: "d-inline-block",
                                                children: "King Kong",
                                              }),
                                            ],
                                          }),
                                          Object(r.jsx)("span", {
                                            className: "d-block sub-comment",
                                            children: "Perfect Video!",
                                          }),
                                          Object(r.jsx)("p", {
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
                      Object(r.jsx)("div", {
                        className: "col-lg-4 col-md-12",
                        children: Object(r.jsx)(
                          S,
                          R(R({}, s), {}, { loggedInUser: t })
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            Object(r.jsx)(D.a, {}),
          ],
        });
      };
      M.getInitialProps = (function () {
        var e = Object(i.a)(
          a.a.mark(function e(s) {
            var t, c, i;
            return a.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = s.query.id),
                      (c = "".concat(v.a, "/api/v1/courses/course/").concat(t)),
                      (e.next = 4),
                      x.a.get(c)
                    );
                  case 4:
                    return (i = e.sent), e.abrupt("return", i.data);
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (s) {
          return e.apply(this, arguments);
        };
      })();
      s.default = M;
    },
    "dP/F": function (e, s, t) {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 });
      var c =
          Object.assign ||
          function (e) {
            for (var s = 1; s < arguments.length; s++) {
              var t = arguments[s];
              for (var c in t)
                Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
            }
            return e;
          },
        a = (function () {
          function e(e, s) {
            for (var t = 0; t < s.length; t++) {
              var c = s[t];
              (c.enumerable = c.enumerable || !1),
                (c.configurable = !0),
                "value" in c && (c.writable = !0),
                Object.defineProperty(e, c.key, c);
            }
          }
          return function (s, t, c) {
            return t && e(s.prototype, t), c && e(s, c), s;
          };
        })(),
        i = r(t("q1tI")),
        n = r(t("17x9"));
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, s, t) {
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
      var o = !1,
        d = !1,
        j = !1,
        b = (function (e) {
          function s(e) {
            !(function (e, s) {
              if (!(e instanceof s))
                throw new TypeError("Cannot call a class as a function");
            })(this, s);
            var t = (function (e, s) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !s || ("object" !== typeof s && "function" !== typeof s)
                ? e
                : s;
            })(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e));
            return (
              (t.onScriptLoaded = function () {
                s.stripeHandler ||
                  ((s.stripeHandler = StripeCheckout.configure({
                    key: t.props.stripeKey,
                  })),
                  t.hasPendingClick && t.showStripeDialog());
              }),
              (t.onScriptError = function () {
                for (var e = arguments.length, s = Array(e), c = 0; c < e; c++)
                  s[c] = arguments[c];
                t.hideLoadingDialog(),
                  t.props.onScriptError && t.props.onScriptError.apply(t, s);
              }),
              (t.onClosed = function () {
                for (var e = arguments.length, s = Array(e), c = 0; c < e; c++)
                  s[c] = arguments[c];
                t._isMounted && t.setState({ open: !1 }),
                  t.props.closed && t.props.closed.apply(t, s);
              }),
              (t.onOpened = function () {
                for (var e = arguments.length, s = Array(e), c = 0; c < e; c++)
                  s[c] = arguments[c];
                t.setState({ open: !0 }),
                  t.props.opened && t.props.opened.apply(t, s);
              }),
              (t.getConfig = function () {
                return [
                  "token",
                  "image",
                  "name",
                  "description",
                  "amount",
                  "locale",
                  "currency",
                  "panelLabel",
                  "zipCode",
                  "shippingAddress",
                  "billingAddress",
                  "email",
                  "allowRememberMe",
                  "bitcoin",
                  "alipay",
                  "alipayReusable",
                ].reduce(
                  function (e, s) {
                    return c(
                      {},
                      e,
                      t.props.hasOwnProperty(s) && l({}, s, t.props[s])
                    );
                  },
                  { opened: t.onOpened, closed: t.onClosed }
                );
              }),
              (t.onClick = function () {
                if (!t.props.disabled)
                  if (j)
                    try {
                      throw new Error(
                        "Tried to call onClick, but StripeCheckout failed to load"
                      );
                    } catch (e) {}
                  else
                    s.stripeHandler
                      ? t.showStripeDialog()
                      : (t.showLoadingDialog(), (t.hasPendingClick = !0));
              }),
              (t.handleOnMouseDown = function () {
                t.setState({ buttonActive: !0 });
              }),
              (t.handleOnMouseUp = function () {
                t.setState({ buttonActive: !1 });
              }),
              (t.state = { open: !1, buttonActive: !1 }),
              t
            );
          }
          return (
            (function (e, s) {
              if ("function" !== typeof s && null !== s)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof s
                );
              (e.prototype = Object.create(s && s.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                s &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, s)
                    : (e.__proto__ = s));
            })(s, e),
            a(s, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  if (((this._isMounted = !0), !d && !o)) {
                    o = !0;
                    var s = document.createElement("script");
                    "function" === typeof this.props.onScriptTagCreated &&
                      this.props.onScriptTagCreated(s),
                      (s.src = "https://checkout.stripe.com/checkout.js"),
                      (s.async = 1),
                      (this.loadPromise = (function () {
                        var t = !1,
                          c = new Promise(function (t, c) {
                            (s.onload = function () {
                              (d = !0), (o = !1), t(), e.onScriptLoaded();
                            }),
                              (s.onerror = function (s) {
                                (j = !0), (o = !1), c(s), e.onScriptError(s);
                              });
                          });
                        return {
                          promise: new Promise(function (e, s) {
                            c.then(function () {
                              return t ? s({ isCanceled: !0 }) : e();
                            }),
                              c.catch(function (e) {
                                return s(t ? { isCanceled: !0 } : e);
                              });
                          }),
                          cancel: function () {
                            t = !0;
                          },
                        };
                      })()),
                      this.loadPromise.promise
                        .then(this.onScriptLoaded)
                        .catch(this.onScriptError),
                      document.body.appendChild(s);
                  }
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  o || this.updateStripeHandler();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  (this._isMounted = !1),
                    this.loadPromise && this.loadPromise.cancel(),
                    s.stripeHandler &&
                      this.state.open &&
                      s.stripeHandler.close();
                },
              },
              {
                key: "updateStripeHandler",
                value: function () {
                  (s.stripeHandler && !this.props.reconfigureOnUpdate) ||
                    (s.stripeHandler = StripeCheckout.configure({
                      key: this.props.stripeKey,
                    }));
                },
              },
              {
                key: "showLoadingDialog",
                value: function () {
                  if (this.props.showLoadingDialog) {
                    for (
                      var e = arguments.length, s = Array(e), t = 0;
                      t < e;
                      t++
                    )
                      s[t] = arguments[t];
                    this.props.showLoadingDialog.apply(this, s);
                  }
                },
              },
              {
                key: "hideLoadingDialog",
                value: function () {
                  if (this.props.hideLoadingDialog) {
                    for (
                      var e = arguments.length, s = Array(e), t = 0;
                      t < e;
                      t++
                    )
                      s[t] = arguments[t];
                    this.props.hideLoadingDialog.apply(this, s);
                  }
                },
              },
              {
                key: "showStripeDialog",
                value: function () {
                  this.hideLoadingDialog(),
                    s.stripeHandler.open(this.getConfig());
                },
              },
              {
                key: "renderDefaultStripeButton",
                value: function () {
                  return i.default.createElement(
                    "button",
                    c({}, l({}, this.props.triggerEvent, this.onClick), {
                      className: this.props.className,
                      onMouseDown: this.handleOnMouseDown,
                      onFocus: this.handleOnMouseDown,
                      onMouseUp: this.handleOnMouseUp,
                      onMouseOut: this.handleOnMouseUp,
                      onBlur: this.handleOnMouseUp,
                      style: c(
                        {},
                        {
                          overflow: "hidden",
                          display: "inline-block",
                          background: "linear-gradient(#28a0e5,#015e94)",
                          border: 0,
                          padding: 1,
                          textDecoration: "none",
                          borderRadius: 5,
                          boxShadow: "0 1px 0 rgba(0,0,0,0.2)",
                          cursor: "pointer",
                          visibility: "visible",
                          userSelect: "none",
                        },
                        this.state.buttonActive && { background: "#005d93" },
                        this.props.style
                      ),
                    }),
                    i.default.createElement(
                      "span",
                      {
                        style: c(
                          {},
                          {
                            backgroundImage:
                              "linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",
                            fontFamily:
                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                            fontSize: 14,
                            position: "relative",
                            padding: "0 12px",
                            display: "block",
                            height: 30,
                            lineHeight: "30px",
                            color: "#fff",
                            fontWeight: "bold",
                            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
                            textShadow: "0 -1px 0 rgba(0,0,0,0.25)",
                            borderRadius: 4,
                          },
                          this.state.buttonActive && {
                            color: "#eee",
                            boxShadow: "inset 0 1px 0 rgba(0,0,0,0.1)",
                            backgroundImage:
                              "linear-gradient(#008cdd,#008cdd 85%,#239adf)",
                          },
                          this.props.textStyle
                        ),
                      },
                      this.props.label
                    )
                  );
                },
              },
              {
                key: "renderDisabledButton",
                value: function () {
                  return i.default.createElement(
                    "button",
                    {
                      disabled: !0,
                      style: {
                        background: "rgba(0,0,0,0.2)",
                        overflow: "hidden",
                        display: "inline-block",
                        border: 0,
                        padding: 1,
                        textDecoration: "none",
                        borderRadius: 5,
                        userSelect: "none",
                      },
                    },
                    i.default.createElement(
                      "span",
                      {
                        style: {
                          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
                          fontFamily:
                            '"Helvetica Neue",Helvetica,Arial,sans-serif',
                          fontSize: 14,
                          position: "relative",
                          padding: "0 12px",
                          display: "block",
                          height: 30,
                          lineHeight: "30px",
                          borderRadius: 4,
                          color: "#999",
                          background: "#f8f9fa",
                          textShadow: "0 1px 0 rgba(255,255,255,0.5)",
                        },
                      },
                      this.props.label
                    )
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  !0 !== this.props.desktopShowModal || this.state.open
                    ? !1 === this.props.desktopShowModal &&
                      this.state.open &&
                      s.stripeHandler.close()
                    : this.onClick();
                  var e = this.props.ComponentClass;
                  return this.props.children
                    ? i.default.createElement(
                        e,
                        c({}, l({}, this.props.triggerEvent, this.onClick), {
                          children: this.props.children,
                        })
                      )
                    : this.props.disabled
                    ? this.renderDisabledButton()
                    : this.renderDefaultStripeButton();
                },
              },
            ]),
            s
          );
        })(i.default.Component);
      (b.defaultProps = {
        className: "StripeCheckout",
        label: "Pay With Card",
        locale: "auto",
        ComponentClass: "span",
        reconfigureOnUpdate: !1,
        triggerEvent: "onClick",
      }),
        (b.propTypes = {
          desktopShowModal: n.default.bool,
          triggerEvent: n.default.oneOf([
            "onClick",
            "onTouchTap",
            "onTouchStart",
          ]),
          label: n.default.string,
          style: n.default.object,
          textStyle: n.default.object,
          disabled: n.default.bool,
          ComponentClass: n.default.string,
          showLoadingDialog: n.default.func,
          hideLoadingDialog: n.default.func,
          onScriptError: n.default.func,
          onScriptTagCreated: n.default.func,
          reconfigureOnUpdate: n.default.bool,
          stripeKey: n.default.string.isRequired,
          token: n.default.func.isRequired,
          name: n.default.string,
          description: n.default.string,
          image: n.default.string,
          amount: n.default.number,
          locale: n.default.oneOf([
            "auto",
            "zh",
            "da",
            "nl",
            "en",
            "fr",
            "de",
            "it",
            "ja",
            "no",
            "es",
            "sv",
          ]),
          currency: n.default.oneOf([
            "AED",
            "AFN",
            "ALL",
            "AMD",
            "ANG",
            "AOA",
            "ARS",
            "AUD",
            "AWG",
            "AZN",
            "BAM",
            "BBD",
            "BDT",
            "BGN",
            "BIF",
            "BMD",
            "BND",
            "BOB",
            "BRL",
            "BSD",
            "BWP",
            "BZD",
            "CAD",
            "CDF",
            "CHF",
            "CLP",
            "CNY",
            "COP",
            "CRC",
            "CVE",
            "CZK",
            "DJF",
            "DKK",
            "DOP",
            "DZD",
            "EEK",
            "EGP",
            "ETB",
            "EUR",
            "FJD",
            "FKP",
            "GBP",
            "GEL",
            "GIP",
            "GMD",
            "GNF",
            "GTQ",
            "GYD",
            "HKD",
            "HNL",
            "HRK",
            "HTG",
            "HUF",
            "IDR",
            "ILS",
            "INR",
            "ISK",
            "JMD",
            "JPY",
            "KES",
            "KGS",
            "KHR",
            "KMF",
            "KRW",
            "KYD",
            "KZT",
            "LAK",
            "LBP",
            "LKR",
            "LRD",
            "LSL",
            "LTL",
            "LVL",
            "MAD",
            "MDL",
            "MGA",
            "MKD",
            "MNT",
            "MOP",
            "MRO",
            "MUR",
            "MVR",
            "MWK",
            "MXN",
            "MYR",
            "MZN",
            "NAD",
            "NGN",
            "NIO",
            "NOK",
            "NPR",
            "NZD",
            "PAB",
            "PEN",
            "PGK",
            "PHP",
            "PKR",
            "PLN",
            "PYG",
            "QAR",
            "RON",
            "RSD",
            "RUB",
            "RWF",
            "SAR",
            "SBD",
            "SCR",
            "SEK",
            "SGD",
            "SHP",
            "SLL",
            "SOS",
            "SRD",
            "STD",
            "SVC",
            "SZL",
            "THB",
            "TJS",
            "TOP",
            "TRY",
            "TTD",
            "TWD",
            "TZS",
            "UAH",
            "UGX",
            "USD",
            "UYU",
            "UZS",
            "VND",
            "VUV",
            "WST",
            "XAF",
            "XCD",
            "XOF",
            "XPF",
            "YER",
            "ZAR",
            "ZMW",
          ]),
          panelLabel: n.default.string,
          zipCode: n.default.bool,
          billingAddress: n.default.bool,
          shippingAddress: n.default.bool,
          email: n.default.string,
          allowRememberMe: n.default.bool,
          bitcoin: n.default.bool,
          alipay: n.default.oneOf(["auto", !0, !1]),
          alipayReusable: n.default.bool,
          opened: n.default.func,
          closed: n.default.func,
        }),
        (b._isMounted = !1),
        (s.default = b);
    },
    n44G: function (e, s, t) {
      "use strict";
      var c = t("nKUr"),
        a = (t("q1tI"), t("YFqc")),
        i = t.n(a);
      s.a = function (e) {
        var s = e.pageTitle,
          t = e.homePageUrl,
          a = e.homePageText,
          n = e.innerPageUrl,
          r = e.innerPageText,
          l = e.activePageText;
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
                      Object(c.jsx)("li", {
                        children: Object(c.jsx)(i.a, {
                          href: n,
                          children: Object(c.jsx)("a", { children: r }),
                        }),
                      }),
                      Object(c.jsx)("li", { className: "active", children: l }),
                    ],
                  }),
                  Object(c.jsx)("h2", { children: s }),
                  Object(c.jsxs)("div", {
                    className: "rating",
                    children: [
                      Object(c.jsx)("i", { className: "bx bxs-star" }),
                      Object(c.jsx)("i", { className: "bx bxs-star" }),
                      Object(c.jsx)("i", { className: "bx bxs-star" }),
                      Object(c.jsx)("i", { className: "bx bxs-star" }),
                      Object(c.jsx)("i", { className: "bx bxs-star" }),
                      Object(c.jsx)("div", {
                        className: "rating-count",
                        children: Object(c.jsx)("span", {
                          children: "4.0 (1 rating)",
                        }),
                      }),
                    ],
                  }),
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
    oZ7J: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/courses/[id]",
        function () {
          return t("CLJu");
        },
      ]);
    },
    p46w: function (e, s, t) {
      var c, a;
      !(function (i) {
        if (
          (void 0 ===
            (a = "function" === typeof (c = i) ? c.call(s, t, s, e) : c) ||
            (e.exports = a),
          !0,
          (e.exports = i()),
          !!0)
        ) {
          var n = window.Cookies,
            r = (window.Cookies = i());
          r.noConflict = function () {
            return (window.Cookies = n), r;
          };
        }
      })(function () {
        function e() {
          for (var e = 0, s = {}; e < arguments.length; e++) {
            var t = arguments[e];
            for (var c in t) s[c] = t[c];
          }
          return s;
        }
        function s(e) {
          return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
        }
        return (function t(c) {
          function a() {}
          function i(s, t, i) {
            if ("undefined" !== typeof document) {
              "number" ===
                typeof (i = e({ path: "/" }, a.defaults, i)).expires &&
                (i.expires = new Date(1 * new Date() + 864e5 * i.expires)),
                (i.expires = i.expires ? i.expires.toUTCString() : "");
              try {
                var n = JSON.stringify(t);
                /^[\{\[]/.test(n) && (t = n);
              } catch (o) {}
              (t = c.write
                ? c.write(t, s)
                : encodeURIComponent(String(t)).replace(
                    /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                    decodeURIComponent
                  )),
                (s = encodeURIComponent(String(s))
                  .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                  .replace(/[\(\)]/g, escape));
              var r = "";
              for (var l in i)
                i[l] &&
                  ((r += "; " + l),
                  !0 !== i[l] && (r += "=" + i[l].split(";")[0]));
              return (document.cookie = s + "=" + t + r);
            }
          }
          function n(e, t) {
            if ("undefined" !== typeof document) {
              for (
                var a = {},
                  i = document.cookie ? document.cookie.split("; ") : [],
                  n = 0;
                n < i.length;
                n++
              ) {
                var r = i[n].split("="),
                  l = r.slice(1).join("=");
                t || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                try {
                  var o = s(r[0]);
                  if (((l = (c.read || c)(l, o) || s(l)), t))
                    try {
                      l = JSON.parse(l);
                    } catch (d) {}
                  if (((a[o] = l), e === o)) break;
                } catch (d) {}
              }
              return e ? a[e] : a;
            }
          }
          return (
            (a.set = i),
            (a.get = function (e) {
              return n(e, !1);
            }),
            (a.getJSON = function (e) {
              return n(e, !0);
            }),
            (a.remove = function (s, t) {
              i(s, "", e(t, { expires: -1 }));
            }),
            (a.defaults = {}),
            (a.withConverter = t),
            a
          );
        })(function () {});
      });
    },
    "rIL+": function (e, s, t) {
      "use strict";
      var c = t("nKUr"),
        a = (t("q1tI"), t("YFqc")),
        i = t.n(a);
      s.a = function () {
        return Object(c.jsx)("div", {
          className: "courses-area bg-f8f9f8 pt-100 pb-70",
          children: Object(c.jsxs)("div", {
            className: "container",
            children: [
              Object(c.jsx)("div", {
                className: "section-title",
                children: Object(c.jsx)("h2", {
                  children: "More Courses You Might Like",
                }),
              }),
              Object(c.jsxs)("div", {
                className: "row",
                children: [
                  Object(c.jsx)("div", {
                    className: "col-lg-4 col-md-6",
                    children: Object(c.jsxs)("div", {
                      className: "single-courses-box",
                      children: [
                        Object(c.jsxs)("div", {
                          className: "courses-image",
                          children: [
                            Object(c.jsx)(i.a, {
                              href: "/single-courses-1",
                              children: Object(c.jsx)("a", {
                                className: "d-block image",
                                children: Object(c.jsx)("img", {
                                  src: "/images/courses/courses1.jpg",
                                  alt: "image",
                                }),
                              }),
                            }),
                            Object(c.jsx)("a", {
                              href: "#",
                              className: "fav",
                              children: Object(c.jsx)("i", {
                                className: "flaticon-heart",
                              }),
                            }),
                            Object(c.jsx)("div", {
                              className: "price shadow",
                              children: "$39",
                            }),
                          ],
                        }),
                        Object(c.jsxs)("div", {
                          className: "courses-content",
                          children: [
                            Object(c.jsxs)("div", {
                              className:
                                "course-author d-flex align-items-center",
                              children: [
                                Object(c.jsx)("img", {
                                  src: "/images/user1.jpg",
                                  className: "rounded-circle",
                                  alt: "image",
                                }),
                                Object(c.jsx)("span", {
                                  children: "Alex Morgan",
                                }),
                              ],
                            }),
                            Object(c.jsx)("h3", {
                              children: Object(c.jsx)(i.a, {
                                href: "/single-courses-1",
                                children: Object(c.jsx)("a", {
                                  children:
                                    "The Data Science Course 2020: Complete Data Science Bootcamp",
                                }),
                              }),
                            }),
                            Object(c.jsx)("p", {
                              children:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
                            }),
                            Object(c.jsxs)("ul", {
                              className:
                                "courses-box-footer d-flex justify-content-between align-items-center",
                              children: [
                                Object(c.jsxs)("li", {
                                  children: [
                                    Object(c.jsx)("i", {
                                      className: "flaticon-agenda",
                                    }),
                                    " 15 Lessons",
                                  ],
                                }),
                                Object(c.jsxs)("li", {
                                  children: [
                                    Object(c.jsx)("i", {
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
                  Object(c.jsx)("div", {
                    className: "col-lg-4 col-md-6",
                    children: Object(c.jsxs)("div", {
                      className: "single-courses-box",
                      children: [
                        Object(c.jsxs)("div", {
                          className: "courses-image",
                          children: [
                            Object(c.jsx)(i.a, {
                              href: "/single-courses-1",
                              children: Object(c.jsx)("a", {
                                className: "d-block image",
                                children: Object(c.jsx)("img", {
                                  src: "/images/courses/courses2.jpg",
                                  alt: "image",
                                }),
                              }),
                            }),
                            Object(c.jsx)("a", {
                              href: "#",
                              className: "fav",
                              children: Object(c.jsx)("i", {
                                className: "flaticon-heart",
                              }),
                            }),
                            Object(c.jsx)("div", {
                              className: "price shadow",
                              children: "$49",
                            }),
                          ],
                        }),
                        Object(c.jsxs)("div", {
                          className: "courses-content",
                          children: [
                            Object(c.jsxs)("div", {
                              className:
                                "course-author d-flex align-items-center",
                              children: [
                                Object(c.jsx)("img", {
                                  src: "/images/user2.jpg",
                                  className: "rounded-circle",
                                  alt: "image",
                                }),
                                Object(c.jsx)("span", {
                                  children: "Sarah Taylor",
                                }),
                              ],
                            }),
                            Object(c.jsx)("h3", {
                              children: Object(c.jsx)(i.a, {
                                href: "/single-courses-1",
                                children: Object(c.jsx)("a", {
                                  children:
                                    "Java Programming MasterclassName for Software Developers",
                                }),
                              }),
                            }),
                            Object(c.jsx)("p", {
                              children:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
                            }),
                            Object(c.jsxs)("ul", {
                              className:
                                "courses-box-footer d-flex justify-content-between align-items-center",
                              children: [
                                Object(c.jsxs)("li", {
                                  children: [
                                    Object(c.jsx)("i", {
                                      className: "flaticon-agenda",
                                    }),
                                    " 20 Lessons",
                                  ],
                                }),
                                Object(c.jsxs)("li", {
                                  children: [
                                    Object(c.jsx)("i", {
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
                  Object(c.jsx)("div", {
                    className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3",
                    children: Object(c.jsxs)("div", {
                      className: "single-courses-box",
                      children: [
                        Object(c.jsxs)("div", {
                          className: "courses-image",
                          children: [
                            Object(c.jsx)(i.a, {
                              href: "/single-courses-1",
                              children: Object(c.jsx)("a", {
                                className: "d-block image",
                                children: Object(c.jsx)("img", {
                                  src: "/images/courses/courses3.jpg",
                                  alt: "image",
                                }),
                              }),
                            }),
                            Object(c.jsx)("a", {
                              href: "#",
                              className: "fav",
                              children: Object(c.jsx)("i", {
                                className: "flaticon-heart",
                              }),
                            }),
                            Object(c.jsx)("div", {
                              className: "price shadow",
                              children: "$59",
                            }),
                          ],
                        }),
                        Object(c.jsxs)("div", {
                          className: "courses-content",
                          children: [
                            Object(c.jsxs)("div", {
                              className:
                                "course-author d-flex align-items-center",
                              children: [
                                Object(c.jsx)("img", {
                                  src: "/images/user3.jpg",
                                  className: "rounded-circle",
                                  alt: "image",
                                }),
                                Object(c.jsx)("span", {
                                  children: "David Warner",
                                }),
                              ],
                            }),
                            Object(c.jsx)("h3", {
                              children: Object(c.jsx)(i.a, {
                                href: "/single-courses-1",
                                children: Object(c.jsx)("a", {
                                  children:
                                    "Deep Learning A-Z\u2122: Hands-On Artificial Neural Networks",
                                }),
                              }),
                            }),
                            Object(c.jsx)("p", {
                              children:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
                            }),
                            Object(c.jsxs)("ul", {
                              className:
                                "courses-box-footer d-flex justify-content-between align-items-center",
                              children: [
                                Object(c.jsxs)("li", {
                                  children: [
                                    Object(c.jsx)("i", {
                                      className: "flaticon-agenda",
                                    }),
                                    " 20 Lessons",
                                  ],
                                }),
                                Object(c.jsxs)("li", {
                                  children: [
                                    Object(c.jsx)("i", {
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
    xUX2: function (e, s, t) {
      "use strict";
      s.a = function (e, s) {
        var t;
        e.response
          ? ((t = e.response.data),
            e.response.data.error && (t = e.response.data.error.message))
          : e.request && (t = e.request),
          s(t);
      };
    },
  },
  [["oZ7J", 1, 0, 2, 4, 5, 10, 9]],
]);
