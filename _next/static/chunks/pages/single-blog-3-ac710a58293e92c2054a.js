_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [89],
  {
    rePB: function (e, s, a) {
      "use strict";
      function t(e, s, a) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = a),
          e
        );
      }
      a.d(s, "a", function () {
        return t;
      });
    },
    tPkk: function (e, s, a) {
      "use strict";
      a.r(s);
      var t = a("rePB"),
        i = a("nKUr"),
        c = a("ODXe"),
        r = a("q1tI"),
        l = a.n(r),
        n = a("Ix5F"),
        o = a("YFqc"),
        j = a.n(o),
        d = a("y1kX"),
        b = a("CucJ"),
        m = a("Vvt1");
      function u(e, s) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          s &&
            (t = t.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            a.push.apply(a, t);
        }
        return a;
      }
      function h(e) {
        for (var s = 1; s < arguments.length; s++) {
          var a = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? u(Object(a), !0).forEach(function (s) {
                Object(t.a)(e, s, a[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : u(Object(a)).forEach(function (s) {
                Object.defineProperty(
                  e,
                  s,
                  Object.getOwnPropertyDescriptor(a, s)
                );
              });
        }
        return e;
      }
      var x = a.n(m)()(
          function () {
            return a.e(3).then(a.t.bind(null, "Rst5", 7));
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
        O = {
          loop: !0,
          nav: !0,
          dots: !1,
          autoplayHoverPause: !0,
          autoplay: !0,
          animateOut: "fadeOut",
          items: 1,
          navText: [
            "<i class='flaticon-chevron'></i>",
            "<i class='flaticon-right-arrow'></i>",
          ],
        };
      s.default = function () {
        var e = l.a.useState(!1),
          s = Object(c.a)(e, 2),
          a = s[0],
          t = s[1];
        return (
          l.a.useEffect(function () {
            t(!0);
          }, []),
          Object(i.jsxs)(l.a.Fragment, {
            children: [
              Object(i.jsx)(n.a, {
                pageTitle: "Blog Details",
                homePageUrl: "/",
                homePageText: "Home",
                activePageText: "Blog Details",
              }),
              Object(i.jsx)("div", {
                className: "blog-details-area ptb-100",
                children: Object(i.jsx)("div", {
                  className: "container",
                  children: Object(i.jsxs)("div", {
                    className: "row",
                    children: [
                      Object(i.jsx)("div", {
                        className: "col-lg-8 col-md-12",
                        children: Object(i.jsxs)("div", {
                          className: "blog-details-desc",
                          children: [
                            a
                              ? Object(i.jsxs)(
                                  x,
                                  h(
                                    h(
                                      {
                                        className:
                                          "article-image-slides owl-carousel owl-theme",
                                      },
                                      O
                                    ),
                                    {},
                                    {
                                      children: [
                                        Object(i.jsx)("div", {
                                          className: "article-image",
                                          children: Object(i.jsx)("img", {
                                            src: "/images/blog/blog3.jpg",
                                            alt: "image",
                                          }),
                                        }),
                                        Object(i.jsx)("div", {
                                          className: "article-image",
                                          children: Object(i.jsx)("img", {
                                            src: "/images/blog/blog2.jpg",
                                            alt: "image",
                                          }),
                                        }),
                                        Object(i.jsx)("div", {
                                          className: "article-image",
                                          children: Object(i.jsx)("img", {
                                            src: "/images/blog/blog1.jpg",
                                            alt: "image",
                                          }),
                                        }),
                                      ],
                                    }
                                  )
                                )
                              : "",
                            Object(i.jsxs)("div", {
                              className: "article-content",
                              children: [
                                Object(i.jsx)("div", {
                                  className: "entry-meta",
                                  children: Object(i.jsxs)("ul", {
                                    children: [
                                      Object(i.jsxs)("li", {
                                        children: [
                                          Object(i.jsx)("i", {
                                            className: "bx bx-folder-open",
                                          }),
                                          Object(i.jsx)("span", {
                                            children: "Category",
                                          }),
                                          Object(i.jsx)(j.a, {
                                            href: "#",
                                            children: Object(i.jsx)("a", {
                                              children: "Fashion",
                                            }),
                                          }),
                                        ],
                                      }),
                                      Object(i.jsxs)("li", {
                                        children: [
                                          Object(i.jsx)("i", {
                                            className: "bx bx-group",
                                          }),
                                          Object(i.jsx)("span", {
                                            children: "View",
                                          }),
                                          Object(i.jsx)(j.a, {
                                            href: "#",
                                            children: Object(i.jsx)("a", {
                                              children: "813,454",
                                            }),
                                          }),
                                        ],
                                      }),
                                      Object(i.jsxs)("li", {
                                        children: [
                                          Object(i.jsx)("i", {
                                            className: "bx bx-calendar",
                                          }),
                                          Object(i.jsx)("span", {
                                            children: "Last Updated",
                                          }),
                                          Object(i.jsx)(j.a, {
                                            href: "#",
                                            children: Object(i.jsx)("a", {
                                              children: "25/04/2020",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                Object(i.jsx)("h3", {
                                  children:
                                    "It\u2019s Time To Think Differently About Homeschooling",
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.",
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
                                }),
                                Object(i.jsxs)("blockquote", {
                                  className: "wp-block-quote",
                                  children: [
                                    Object(i.jsx)("p", {
                                      children:
                                        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                                    }),
                                    Object(i.jsx)("cite", {
                                      children: "Tom Cruise",
                                    }),
                                  ],
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.",
                                }),
                                Object(i.jsxs)("ul", {
                                  className: "wp-block-gallery columns-3",
                                  children: [
                                    Object(i.jsx)("li", {
                                      className: "blocks-gallery-item",
                                      children: Object(i.jsx)("figure", {
                                        children: Object(i.jsx)("img", {
                                          src: "/images/blog/blog15.jpg",
                                          alt: "image",
                                        }),
                                      }),
                                    }),
                                    Object(i.jsx)("li", {
                                      className: "blocks-gallery-item",
                                      children: Object(i.jsx)("figure", {
                                        children: Object(i.jsx)("img", {
                                          src: "/images/blog/blog14.jpg",
                                          alt: "image",
                                        }),
                                      }),
                                    }),
                                    Object(i.jsx)("li", {
                                      className: "blocks-gallery-item",
                                      children: Object(i.jsx)("figure", {
                                        children: Object(i.jsx)("img", {
                                          src: "/images/blog/blog13.jpg",
                                          alt: "image",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                Object(i.jsx)("h3", {
                                  children:
                                    "Four major elements that we offer:",
                                }),
                                Object(i.jsxs)("ul", {
                                  className: "features-list",
                                  children: [
                                    Object(i.jsxs)("li", {
                                      children: [
                                        Object(i.jsx)("i", {
                                          className: "bx bx-badge-check",
                                        }),
                                        " Scientific skills for getting a better result",
                                      ],
                                    }),
                                    Object(i.jsxs)("li", {
                                      children: [
                                        Object(i.jsx)("i", {
                                          className: "bx bx-badge-check",
                                        }),
                                        " Communication skills to getting in touch",
                                      ],
                                    }),
                                    Object(i.jsxs)("li", {
                                      children: [
                                        Object(i.jsx)("i", {
                                          className: "bx bx-badge-check",
                                        }),
                                        " A career overview opportunity available",
                                      ],
                                    }),
                                    Object(i.jsxs)("li", {
                                      children: [
                                        Object(i.jsx)("i", {
                                          className: "bx bx-badge-check",
                                        }),
                                        " A good work environment for work",
                                      ],
                                    }),
                                  ],
                                }),
                                Object(i.jsx)("h3", {
                                  children: "Setting the mood with incense",
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
                                }),
                                Object(i.jsx)("h3", {
                                  children:
                                    "The rise of marketing and why you need it",
                                }),
                                Object(i.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
                                }),
                              ],
                            }),
                            Object(i.jsxs)("div", {
                              className: "article-footer",
                              children: [
                                Object(i.jsxs)("div", {
                                  className: "article-tags",
                                  children: [
                                    Object(i.jsx)("span", {
                                      children: Object(i.jsx)("i", {
                                        className: "bx bx-purchase-tag",
                                      }),
                                    }),
                                    Object(i.jsx)("a", {
                                      href: "#",
                                      children: "Fashion",
                                    }),
                                    Object(i.jsx)("a", {
                                      href: "#",
                                      children: "Games",
                                    }),
                                    Object(i.jsx)("a", {
                                      href: "#",
                                      children: "Travel",
                                    }),
                                  ],
                                }),
                                Object(i.jsx)("div", {
                                  className: "article-share",
                                  children: Object(i.jsxs)("ul", {
                                    className: "social",
                                    children: [
                                      Object(i.jsx)("li", {
                                        children: Object(i.jsx)("span", {
                                          children: "Share:",
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        children: Object(i.jsx)("a", {
                                          href: "#",
                                          className: "facebook",
                                          target: "_blank",
                                          children: Object(i.jsx)("i", {
                                            className: "bx bxl-facebook",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        children: Object(i.jsx)("a", {
                                          href: "#",
                                          className: "twitter",
                                          target: "_blank",
                                          children: Object(i.jsx)("i", {
                                            className: "bx bxl-twitter",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        children: Object(i.jsx)("a", {
                                          href: "#",
                                          className: "linkedin",
                                          target: "_blank",
                                          children: Object(i.jsx)("i", {
                                            className: "bx bxl-linkedin",
                                          }),
                                        }),
                                      }),
                                      Object(i.jsx)("li", {
                                        children: Object(i.jsx)("a", {
                                          href: "#",
                                          className: "instagram",
                                          target: "_blank",
                                          children: Object(i.jsx)("i", {
                                            className: "bx bxl-instagram",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            Object(i.jsxs)("div", {
                              className: "article-author",
                              children: [
                                Object(i.jsx)("div", {
                                  className: "author-profile-header",
                                }),
                                Object(i.jsxs)("div", {
                                  className: "author-profile",
                                  children: [
                                    Object(i.jsxs)("div", {
                                      className: "author-profile-title",
                                      children: [
                                        Object(i.jsx)("img", {
                                          src: "/images/user1.jpg",
                                          className: "shadow-sm",
                                          alt: "image",
                                        }),
                                        Object(i.jsx)("div", {
                                          className:
                                            "author-profile-title-details",
                                          children: Object(i.jsxs)("div", {
                                            className: "author-profile-details",
                                            children: [
                                              Object(i.jsx)("h4", {
                                                children: "Chris Orwig",
                                              }),
                                              Object(i.jsx)("span", {
                                                className: "d-block",
                                                children:
                                                  "Photographer, Author, Writer",
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    Object(i.jsx)("p", {
                                      children:
                                        "Chris Orwig is a celebrated photographer, author, and writer who brings passion to everything he does.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(i.jsxs)("div", {
                              className: "edemy-post-navigation",
                              children: [
                                Object(i.jsx)("div", {
                                  className: "prev-link-wrapper",
                                  children: Object(i.jsx)("div", {
                                    className: "info-prev-link-wrapper",
                                    children: Object(i.jsxs)("a", {
                                      href: "#",
                                      children: [
                                        Object(i.jsxs)("span", {
                                          className: "image-prev",
                                          children: [
                                            Object(i.jsx)("img", {
                                              src: "/images/blog/blog11.jpg",
                                              alt: "image",
                                            }),
                                            Object(i.jsx)("span", {
                                              className: "post-nav-title",
                                              children: "Prev",
                                            }),
                                          ],
                                        }),
                                        Object(i.jsxs)("span", {
                                          className: "prev-link-info-wrapper",
                                          children: [
                                            Object(i.jsx)("span", {
                                              className: "prev-title",
                                              children:
                                                "What Is The MLB Summer Slugger Program?",
                                            }),
                                            Object(i.jsx)("span", {
                                              className: "meta-wrapper",
                                              children: Object(i.jsx)("span", {
                                                className: "date-post",
                                                children: "January 21, 2020",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                Object(i.jsx)("div", {
                                  className: "next-link-wrapper",
                                  children: Object(i.jsx)("div", {
                                    className: "info-next-link-wrapper",
                                    children: Object(i.jsxs)("a", {
                                      href: "#",
                                      children: [
                                        Object(i.jsxs)("span", {
                                          className: "next-link-info-wrapper",
                                          children: [
                                            Object(i.jsx)("span", {
                                              className: "next-title",
                                              children:
                                                "28 Student-Centered Instructional Strategies",
                                            }),
                                            Object(i.jsx)("span", {
                                              className: "meta-wrapper",
                                              children: Object(i.jsx)("span", {
                                                className: "date-post",
                                                children: "January 19, 2020",
                                              }),
                                            }),
                                          ],
                                        }),
                                        Object(i.jsxs)("span", {
                                          className: "image-next",
                                          children: [
                                            Object(i.jsx)("img", {
                                              src: "/images/blog/blog12.jpg",
                                              alt: "image",
                                            }),
                                            Object(i.jsx)("span", {
                                              className: "post-nav-title",
                                              children: "Next",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            Object(i.jsx)(b.a, {}),
                          ],
                        }),
                      }),
                      Object(i.jsx)("div", {
                        className: "col-lg-4 col-md-12",
                        children: Object(i.jsx)(d.a, {}),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      };
    },
    vldj: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/single-blog-3",
        function () {
          return a("tPkk");
        },
      ]);
    },
  },
  [["vldj", 1, 0, 2, 4, 12]],
]);
