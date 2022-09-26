_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [94],
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
    aYEh: function (e, s, c) {
      "use strict";
      c.r(s);
      var i = c("nKUr"),
        a = c("q1tI"),
        t = c.n(a),
        l = c("Ix5F"),
        n = c("ODXe"),
        r = c("YFqc"),
        j = c.n(r),
        o = c("Vvt1"),
        d = c.n(o)()(
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
        m = function () {
          var e = t.a.useState(!1),
            s = Object(n.a)(e, 2),
            c = s[0],
            a = s[1];
          t.a.useEffect(function () {
            a(!0);
          }, []);
          var l = t.a.useState(!0),
            r = Object(n.a)(l, 2),
            o = r[0],
            m = r[1];
          return Object(i.jsxs)(t.a.Fragment, {
            children: [
              Object(i.jsxs)("div", {
                className: "success-story-area pb-100",
                children: [
                  Object(i.jsx)("div", {
                    className: "container",
                    children: Object(i.jsxs)("div", {
                      className: "video-box mt-0",
                      children: [
                        Object(i.jsx)("div", {
                          className: "image",
                          children: Object(i.jsx)("img", {
                            src: "/images/success-story.jpg",
                            className: "shadow",
                            alt: "image",
                          }),
                        }),
                        Object(i.jsx)(j.a, {
                          href: "#play-video",
                          children: Object(i.jsx)("a", {
                            onClick: function (e) {
                              e.preventDefault(), m(!o);
                            },
                            className: "video-btn popup-youtube",
                            children: Object(i.jsx)("i", {
                              className: "flaticon-play",
                            }),
                          }),
                        }),
                        Object(i.jsx)("div", {
                          className: "shape10",
                          children: Object(i.jsx)("img", {
                            src: "/images/shape9.png",
                            alt: "image",
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(i.jsx)("div", {
                    className: "shape2",
                    children: Object(i.jsx)("img", {
                      src: "/images/shape2.png",
                      alt: "image",
                    }),
                  }),
                  Object(i.jsx)("div", {
                    className: "shape3",
                    children: Object(i.jsx)("img", {
                      src: "/images/shape3.png",
                      alt: "image",
                    }),
                  }),
                  Object(i.jsx)("div", {
                    className: "shape4",
                    children: Object(i.jsx)("img", {
                      src: "/images/shape4.png",
                      alt: "image",
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
              }),
              c
                ? Object(i.jsx)(d, {
                    channel: "youtube",
                    isOpen: !o,
                    videoId: "bk7McNUjWgw",
                    onClose: function () {
                      return m(!o);
                    },
                  })
                : "",
            ],
          });
        },
        h = function () {
          return Object(i.jsx)("div", {
            className: "start-with-success-area pt-100 bg-f8f9f8 pb-70",
            children: Object(i.jsxs)("div", {
              className: "container",
              children: [
                Object(i.jsxs)("div", {
                  className: "section-title",
                  children: [
                    Object(i.jsx)("span", {
                      className: "sub-title",
                      children: "Education For Everyone",
                    }),
                    Object(i.jsx)("h2", {
                      children:
                        "Start writing your own success story with a good beginning from eDemy help",
                    }),
                    Object(i.jsx)("p", {
                      children:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    }),
                  ],
                }),
                Object(i.jsxs)("div", {
                  className: "row",
                  children: [
                    Object(i.jsx)("div", {
                      className: "col-lg-4 col-md-6 col-sm-6",
                      children: Object(i.jsxs)("div", {
                        className: "start-with-success-box",
                        children: [
                          Object(i.jsx)("div", {
                            className: "image",
                            children: Object(i.jsx)(j.a, {
                              href: "#",
                              children: Object(i.jsx)("a", {
                                children: Object(i.jsx)("img", {
                                  src: "/images/success-people/success-people1.jpg",
                                  alt: "image",
                                }),
                              }),
                            }),
                          }),
                          Object(i.jsxs)("div", {
                            className: "content",
                            children: [
                              Object(i.jsx)(j.a, {
                                href: "#",
                                children: Object(i.jsx)("a", {
                                  className: "link-btn",
                                  children: Object(i.jsx)("i", {
                                    className: "flaticon-right",
                                  }),
                                }),
                              }),
                              Object(i.jsx)("h3", { children: "Sarah Taylor" }),
                              Object(i.jsx)("span", {
                                children: "Web Developer",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-4 col-md-6 col-sm-6",
                      children: Object(i.jsxs)("div", {
                        className: "start-with-success-box",
                        children: [
                          Object(i.jsx)("div", {
                            className: "image",
                            children: Object(i.jsx)(j.a, {
                              href: "#",
                              children: Object(i.jsx)("a", {
                                children: Object(i.jsx)("img", {
                                  src: "/images/success-people/success-people2.jpg",
                                  alt: "image",
                                }),
                              }),
                            }),
                          }),
                          Object(i.jsxs)("div", {
                            className: "content",
                            children: [
                              Object(i.jsx)(j.a, {
                                href: "#",
                                children: Object(i.jsx)("a", {
                                  className: "link-btn",
                                  children: Object(i.jsx)("i", {
                                    className: "flaticon-right",
                                  }),
                                }),
                              }),
                              Object(i.jsx)("h3", { children: "Alex Maxwell" }),
                              Object(i.jsx)("span", { children: "Tutor" }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-4 col-md-6 col-sm-6",
                      children: Object(i.jsxs)("div", {
                        className: "start-with-success-box",
                        children: [
                          Object(i.jsx)("div", {
                            className: "image",
                            children: Object(i.jsx)(j.a, {
                              href: "#",
                              children: Object(i.jsx)("a", {
                                children: Object(i.jsx)("img", {
                                  src: "/images/success-people/success-people3.jpg",
                                  alt: "image",
                                }),
                              }),
                            }),
                          }),
                          Object(i.jsxs)("div", {
                            className: "content",
                            children: [
                              Object(i.jsx)(j.a, {
                                href: "#",
                                children: Object(i.jsx)("a", {
                                  className: "link-btn",
                                  children: Object(i.jsx)("i", {
                                    className: "flaticon-right",
                                  }),
                                }),
                              }),
                              Object(i.jsx)("h3", { children: "Eva Lucy" }),
                              Object(i.jsx)("span", {
                                children: "UX/UI Designer",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-4 col-md-6 col-sm-6",
                      children: Object(i.jsxs)("div", {
                        className: "start-with-success-box",
                        children: [
                          Object(i.jsx)("div", {
                            className: "image",
                            children: Object(i.jsx)(j.a, {
                              href: "#",
                              children: Object(i.jsx)("a", {
                                children: Object(i.jsx)("img", {
                                  src: "/images/success-people/success-people4.jpg",
                                  alt: "image",
                                }),
                              }),
                            }),
                          }),
                          Object(i.jsxs)("div", {
                            className: "content",
                            children: [
                              Object(i.jsx)(j.a, {
                                href: "#",
                                children: Object(i.jsx)("a", {
                                  className: "link-btn",
                                  children: Object(i.jsx)("i", {
                                    className: "flaticon-right",
                                  }),
                                }),
                              }),
                              Object(i.jsx)("h3", { children: "Alina Smith" }),
                              Object(i.jsx)("span", { children: "Author" }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-4 col-md-6 col-sm-6",
                      children: Object(i.jsxs)("div", {
                        className: "start-with-success-box",
                        children: [
                          Object(i.jsx)("div", {
                            className: "image",
                            children: Object(i.jsx)(j.a, {
                              href: "#",
                              children: Object(i.jsx)("a", {
                                children: Object(i.jsx)("img", {
                                  src: "/images/success-people/success-people5.jpg",
                                  alt: "image",
                                }),
                              }),
                            }),
                          }),
                          Object(i.jsxs)("div", {
                            className: "content",
                            children: [
                              Object(i.jsx)(j.a, {
                                href: "#",
                                children: Object(i.jsx)("a", {
                                  className: "link-btn",
                                  children: Object(i.jsx)("i", {
                                    className: "flaticon-right",
                                  }),
                                }),
                              }),
                              Object(i.jsx)("h3", {
                                children: "James Anderson",
                              }),
                              Object(i.jsx)("span", { children: "Designer" }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-4 col-md-6 col-sm-6",
                      children: Object(i.jsxs)("div", {
                        className: "start-with-success-box",
                        children: [
                          Object(i.jsx)("div", {
                            className: "image",
                            children: Object(i.jsx)(j.a, {
                              href: "#",
                              children: Object(i.jsx)("a", {
                                children: Object(i.jsx)("img", {
                                  src: "/images/success-people/success-people6.jpg",
                                  alt: "image",
                                }),
                              }),
                            }),
                          }),
                          Object(i.jsxs)("div", {
                            className: "content",
                            children: [
                              Object(i.jsx)(j.a, {
                                href: "#",
                                children: Object(i.jsx)("a", {
                                  className: "link-btn",
                                  children: Object(i.jsx)("i", {
                                    className: "flaticon-right",
                                  }),
                                }),
                              }),
                              Object(i.jsx)("h3", { children: "Meg Lanning" }),
                              Object(i.jsx)("span", { children: "Writer" }),
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
      s.default = function () {
        return Object(i.jsxs)(t.a.Fragment, {
          children: [
            Object(i.jsx)(l.a, {
              pageTitle: "Success Story",
              homePageUrl: "/",
              homePageText: "Home",
              activePageText: "Success Story",
            }),
            Object(i.jsx)(m, {}),
            Object(i.jsx)("div", {
              className: "testimonials-area ptb-100 bg-fef8ef",
              children: Object(i.jsx)("div", {
                className: "container",
                children: Object(i.jsxs)("div", {
                  className: "single-testimonials-box",
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
                    Object(i.jsx)("span", { children: "Python Developer" }),
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
              }),
            }),
            Object(i.jsx)("div", {
              className: "our-story-area ptb-100",
              children: Object(i.jsx)("div", {
                className: "container",
                children: Object(i.jsxs)("div", {
                  className: "row",
                  children: [
                    Object(i.jsx)("div", {
                      className: "col-lg-4 col-md-12",
                      children: Object(i.jsx)("div", {
                        className: "our-story-title",
                        children: Object(i.jsxs)("h3", {
                          children: [
                            Object(i.jsx)("span", {
                              className: "number",
                              children: "1",
                            }),
                            " Inspirational stories are less about success",
                          ],
                        }),
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-8 col-md-12",
                      children: Object(i.jsxs)("div", {
                        className: "our-story-content",
                        children: [
                          Object(i.jsxs)("p", {
                            children: [
                              Object(i.jsx)(j.a, {
                                href: "#",
                                children: Object(i.jsx)("a", {
                                  children: "eDdemy.com",
                                }),
                              }),
                              " began in 2005. After years in the web hosting industry, we realized that it was near impossible for the average Jane or Joe to create their own website. Traditional web hosting services were simply too complicated, time consuming, and expensive to manage.",
                            ],
                          }),
                          Object(i.jsx)("p", {
                            children:
                              "After seeing an increased need for eCommerce solutions, we developed one of the only fully-featured, free and commission-free online store builders, allowing business owners to launch their online business.",
                          }),
                        ],
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-4 col-md-12",
                      children: Object(i.jsx)("div", {
                        className: "our-story-title",
                        children: Object(i.jsxs)("h3", {
                          children: [
                            Object(i.jsx)("span", {
                              className: "number",
                              children: "2",
                            }),
                            " Academic Excellence and Cultural Diversity",
                          ],
                        }),
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-8 col-md-12",
                      children: Object(i.jsxs)("div", {
                        className: "our-story-content",
                        children: [
                          Object(i.jsxs)("p", {
                            children: [
                              "We created the ",
                              Object(i.jsx)(j.a, {
                                href: "#",
                                children: Object(i.jsx)("a", {
                                  children: "eDdemy.com",
                                }),
                              }),
                              " Site Builder with the user's perspective in mind. We wanted to offer a platform that would require no coding skills or design experience. We keep it simple, so users can focus on creating an amazing website that reflects their brand. Best of all - it's free. You can get online, showcase your brand, or start selling products right away.",
                            ],
                          }),
                          Object(i.jsx)("p", {
                            children:
                              "After seeing an increased need for eCommerce solutions, we developed one of the only fully-featured, free and commission-free online store builders, allowing business owners to launch their online business.",
                          }),
                        ],
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-12 col-md-12",
                      children: Object(i.jsx)("div", {
                        className: "our-story-image",
                        children: Object(i.jsx)("img", {
                          src: "/images/story-img.jpg",
                          alt: "image",
                        }),
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-4 col-md-12",
                      children: Object(i.jsx)("div", {
                        className: "our-story-title",
                        children: Object(i.jsxs)("h3", {
                          children: [
                            Object(i.jsx)("span", {
                              className: "number",
                              children: "3",
                            }),
                            " A classNameical Education for the Future",
                          ],
                        }),
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-8 col-md-12",
                      children: Object(i.jsxs)("div", {
                        className: "our-story-content",
                        children: [
                          Object(i.jsxs)("p", {
                            children: [
                              Object(i.jsx)(j.a, {
                                href: "#",
                                children: Object(i.jsx)("a", {
                                  children: "eDdemy.com",
                                }),
                              }),
                              " began in 2005. After years in the web hosting industry, we realized that it was near impossible for the average Jane or Joe to create their own website. Traditional web hosting services were simply too complicated, time consuming, and expensive to manage.",
                            ],
                          }),
                          Object(i.jsx)("p", {
                            children:
                              "After seeing an increased need for eCommerce solutions, we developed one of the only fully-featured, free and commission-free online store builders, allowing business owners to launch their online business.",
                          }),
                        ],
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-4 col-md-12",
                      children: Object(i.jsx)("div", {
                        className: "our-story-title",
                        children: Object(i.jsxs)("h3", {
                          children: [
                            Object(i.jsx)("span", {
                              className: "number",
                              children: "4",
                            }),
                            " A success-oriented learning environment",
                          ],
                        }),
                      }),
                    }),
                    Object(i.jsx)("div", {
                      className: "col-lg-8 col-md-12",
                      children: Object(i.jsxs)("div", {
                        className: "our-story-content",
                        children: [
                          Object(i.jsxs)("p", {
                            children: [
                              "We created the ",
                              Object(i.jsx)(j.a, {
                                href: "#",
                                children: Object(i.jsx)("a", {
                                  children: "eDdemy.com",
                                }),
                              }),
                              " Site Builder with the user's perspective in mind. We wanted to offer a platform that would require no coding skills or design experience. We keep it simple, so users can focus on creating an amazing website that reflects their brand. Best of all - it's free. You can get online, showcase your brand, or start selling products right away.",
                            ],
                          }),
                          Object(i.jsx)("p", {
                            children:
                              "After seeing an increased need for eCommerce solutions, we developed one of the only fully-featured, free and commission-free online store builders, allowing business owners to launch their online business.",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
            Object(i.jsx)(h, {}),
          ],
        });
      };
    },
    oP8X: function (e, s, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/success-story",
        function () {
          return c("aYEh");
        },
      ]);
    },
  },
  [["oP8X", 1, 0, 2, 4]],
]);
