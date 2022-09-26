_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [88],
  {
    BTBd: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/single-blog-2",
        function () {
          return s("suHC");
        },
      ]);
    },
    YFqc: function (e, t, s) {
      e.exports = s("cTJO");
    },
    cTJO: function (e, t, s) {
      "use strict";
      var a = s("zoAU"),
        i = s("7KCV");
      (t.__esModule = !0), (t.default = void 0);
      var c = i(s("q1tI")),
        r = s("elyg"),
        n = s("nOHt"),
        l = s("vNVm"),
        o = {};
      function d(e, t, s, a) {
        if (e && (0, r.isLocalURL)(t)) {
          e.prefetch(t, s, a).catch(function (e) {
            0;
          });
          var i =
            a && "undefined" !== typeof a.locale ? a.locale : e && e.locale;
          o[t + "%" + s + (i ? "%" + i : "")] = !0;
        }
      }
      var j = function (e) {
        var t = !1 !== e.prefetch,
          s = (0, n.useRouter)(),
          i = (s && s.pathname) || "/",
          j = c.default.useMemo(
            function () {
              var t = (0, r.resolveHref)(i, e.href, !0),
                s = a(t, 2),
                c = s[0],
                n = s[1];
              return {
                href: c,
                as: e.as ? (0, r.resolveHref)(i, e.as) : n || c,
              };
            },
            [i, e.href, e.as]
          ),
          u = j.href,
          b = j.as,
          m = e.children,
          h = e.replace,
          x = e.shallow,
          p = e.scroll,
          g = e.locale;
        "string" === typeof m && (m = c.default.createElement("a", null, m));
        var O = c.Children.only(m),
          f = O && "object" === typeof O && O.ref,
          v = (0, l.useIntersection)({ rootMargin: "200px" }),
          N = a(v, 2),
          w = N[0],
          k = N[1],
          y = c.default.useCallback(
            function (e) {
              w(e),
                f &&
                  ("function" === typeof f
                    ? f(e)
                    : "object" === typeof f && (f.current = e));
            },
            [f, w]
          );
        (0, c.useEffect)(
          function () {
            var e = k && t && (0, r.isLocalURL)(u),
              a = "undefined" !== typeof g ? g : s && s.locale,
              i = o[u + "%" + b + (a ? "%" + a : "")];
            e && !i && d(s, u, b, { locale: a });
          },
          [b, u, k, g, t, s]
        );
        var q = {
          ref: y,
          onClick: function (e) {
            O.props &&
              "function" === typeof O.props.onClick &&
              O.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, s, a, i, c, n, l) {
                  ("A" !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      (0, r.isLocalURL)(s))) &&
                    (e.preventDefault(),
                    null == n && (n = a.indexOf("#") < 0),
                    t[i ? "replace" : "push"](s, a, {
                      shallow: c,
                      locale: l,
                      scroll: n,
                    }).then(function (e) {
                      e && n && document.body.focus();
                    }));
                })(e, s, u, b, h, x, p, g);
          },
          onMouseEnter: function (e) {
            (0, r.isLocalURL)(u) &&
              (O.props &&
                "function" === typeof O.props.onMouseEnter &&
                O.props.onMouseEnter(e),
              d(s, u, b, { priority: !0 }));
          },
        };
        if (e.passHref || ("a" === O.type && !("href" in O.props))) {
          var _ = "undefined" !== typeof g ? g : s && s.locale,
            T = (0, r.getDomainLocale)(
              b,
              _,
              s && s.locales,
              s && s.domainLocales
            );
          q.href =
            T ||
            (0, r.addBasePath)((0, r.addLocale)(b, _, s && s.defaultLocale));
        }
        return c.default.cloneElement(O, q);
      };
      t.default = j;
    },
    suHC: function (e, t, s) {
      "use strict";
      s.r(t);
      var a = s("nKUr"),
        i = s("q1tI"),
        c = s.n(i),
        r = s("Ix5F"),
        n = s("YFqc"),
        l = s.n(n),
        o = s("y1kX"),
        d = s("CucJ");
      t.default = function () {
        return Object(a.jsxs)(c.a.Fragment, {
          children: [
            Object(a.jsx)(r.a, {
              pageTitle: "Blog Details",
              homePageUrl: "/",
              homePageText: "Home",
              activePageText: "Blog Details",
            }),
            Object(a.jsx)("div", {
              className: "blog-details-area ptb-100",
              children: Object(a.jsx)("div", {
                className: "container",
                children: Object(a.jsxs)("div", {
                  className: "row",
                  children: [
                    Object(a.jsx)("div", {
                      className: "col-lg-8 col-md-12",
                      children: Object(a.jsxs)("div", {
                        className: "blog-details-desc",
                        children: [
                          Object(a.jsx)("div", {
                            className: "article-video",
                            children: Object(a.jsx)("iframe", {
                              src: "https://www.youtube.com/embed/bk7McNUjWgw",
                            }),
                          }),
                          Object(a.jsxs)("div", {
                            className: "article-content",
                            children: [
                              Object(a.jsx)("div", {
                                className: "entry-meta",
                                children: Object(a.jsxs)("ul", {
                                  children: [
                                    Object(a.jsxs)("li", {
                                      children: [
                                        Object(a.jsx)("i", {
                                          className: "bx bx-folder-open",
                                        }),
                                        Object(a.jsx)("span", {
                                          children: "Category",
                                        }),
                                        Object(a.jsx)(l.a, {
                                          href: "#",
                                          children: Object(a.jsx)("a", {
                                            children: "Fashion",
                                          }),
                                        }),
                                      ],
                                    }),
                                    Object(a.jsxs)("li", {
                                      children: [
                                        Object(a.jsx)("i", {
                                          className: "bx bx-group",
                                        }),
                                        Object(a.jsx)("span", {
                                          children: "View",
                                        }),
                                        Object(a.jsx)(l.a, {
                                          href: "#",
                                          children: Object(a.jsx)("a", {
                                            children: "813,454",
                                          }),
                                        }),
                                      ],
                                    }),
                                    Object(a.jsxs)("li", {
                                      children: [
                                        Object(a.jsx)("i", {
                                          className: "bx bx-calendar",
                                        }),
                                        Object(a.jsx)("span", {
                                          children: "Last Updated",
                                        }),
                                        Object(a.jsx)(l.a, {
                                          href: "#",
                                          children: Object(a.jsx)("a", {
                                            children: "25/04/2020",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              Object(a.jsx)("h3", {
                                children:
                                  "It\u2019s Time To Think Differently About Homeschooling",
                              }),
                              Object(a.jsx)("p", {
                                children:
                                  "Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.",
                              }),
                              Object(a.jsx)("p", {
                                children:
                                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
                              }),
                              Object(a.jsxs)("blockquote", {
                                className: "wp-block-quote",
                                children: [
                                  Object(a.jsx)("p", {
                                    children:
                                      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                                  }),
                                  Object(a.jsx)("cite", {
                                    children: "Tom Cruise",
                                  }),
                                ],
                              }),
                              Object(a.jsx)("p", {
                                children:
                                  "Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.",
                              }),
                              Object(a.jsxs)("ul", {
                                className: "wp-block-gallery columns-3",
                                children: [
                                  Object(a.jsx)("li", {
                                    className: "blocks-gallery-item",
                                    children: Object(a.jsx)("figure", {
                                      children: Object(a.jsx)("img", {
                                        src: "/images/blog/blog15.jpg",
                                        alt: "image",
                                      }),
                                    }),
                                  }),
                                  Object(a.jsx)("li", {
                                    className: "blocks-gallery-item",
                                    children: Object(a.jsx)("figure", {
                                      children: Object(a.jsx)("img", {
                                        src: "/images/blog/blog14.jpg",
                                        alt: "image",
                                      }),
                                    }),
                                  }),
                                  Object(a.jsx)("li", {
                                    className: "blocks-gallery-item",
                                    children: Object(a.jsx)("figure", {
                                      children: Object(a.jsx)("img", {
                                        src: "/images/blog/blog13.jpg",
                                        alt: "image",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              Object(a.jsx)("h3", {
                                children: "Four major elements that we offer:",
                              }),
                              Object(a.jsxs)("ul", {
                                className: "features-list",
                                children: [
                                  Object(a.jsxs)("li", {
                                    children: [
                                      Object(a.jsx)("i", {
                                        className: "bx bx-badge-check",
                                      }),
                                      " Scientific skills for getting a better result",
                                    ],
                                  }),
                                  Object(a.jsxs)("li", {
                                    children: [
                                      Object(a.jsx)("i", {
                                        className: "bx bx-badge-check",
                                      }),
                                      " Communication skills to getting in touch",
                                    ],
                                  }),
                                  Object(a.jsxs)("li", {
                                    children: [
                                      Object(a.jsx)("i", {
                                        className: "bx bx-badge-check",
                                      }),
                                      " A career overview opportunity available",
                                    ],
                                  }),
                                  Object(a.jsxs)("li", {
                                    children: [
                                      Object(a.jsx)("i", {
                                        className: "bx bx-badge-check",
                                      }),
                                      " A good work environment for work",
                                    ],
                                  }),
                                ],
                              }),
                              Object(a.jsx)("h3", {
                                children: "Setting the mood with incense",
                              }),
                              Object(a.jsx)("p", {
                                children:
                                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
                              }),
                              Object(a.jsx)("h3", {
                                children:
                                  "The rise of marketing and why you need it",
                              }),
                              Object(a.jsx)("p", {
                                children:
                                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
                              }),
                            ],
                          }),
                          Object(a.jsxs)("div", {
                            className: "article-footer",
                            children: [
                              Object(a.jsxs)("div", {
                                className: "article-tags",
                                children: [
                                  Object(a.jsx)("span", {
                                    children: Object(a.jsx)("i", {
                                      className: "bx bx-purchase-tag",
                                    }),
                                  }),
                                  Object(a.jsx)("a", {
                                    href: "#",
                                    children: "Fashion",
                                  }),
                                  Object(a.jsx)("a", {
                                    href: "#",
                                    children: "Games",
                                  }),
                                  Object(a.jsx)("a", {
                                    href: "#",
                                    children: "Travel",
                                  }),
                                ],
                              }),
                              Object(a.jsx)("div", {
                                className: "article-share",
                                children: Object(a.jsxs)("ul", {
                                  className: "social",
                                  children: [
                                    Object(a.jsx)("li", {
                                      children: Object(a.jsx)("span", {
                                        children: "Share:",
                                      }),
                                    }),
                                    Object(a.jsx)("li", {
                                      children: Object(a.jsx)("a", {
                                        href: "#",
                                        className: "facebook",
                                        target: "_blank",
                                        children: Object(a.jsx)("i", {
                                          className: "bx bxl-facebook",
                                        }),
                                      }),
                                    }),
                                    Object(a.jsx)("li", {
                                      children: Object(a.jsx)("a", {
                                        href: "#",
                                        className: "twitter",
                                        target: "_blank",
                                        children: Object(a.jsx)("i", {
                                          className: "bx bxl-twitter",
                                        }),
                                      }),
                                    }),
                                    Object(a.jsx)("li", {
                                      children: Object(a.jsx)("a", {
                                        href: "#",
                                        className: "linkedin",
                                        target: "_blank",
                                        children: Object(a.jsx)("i", {
                                          className: "bx bxl-linkedin",
                                        }),
                                      }),
                                    }),
                                    Object(a.jsx)("li", {
                                      children: Object(a.jsx)("a", {
                                        href: "#",
                                        className: "instagram",
                                        target: "_blank",
                                        children: Object(a.jsx)("i", {
                                          className: "bx bxl-instagram",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          Object(a.jsxs)("div", {
                            className: "article-author",
                            children: [
                              Object(a.jsx)("div", {
                                className: "author-profile-header",
                              }),
                              Object(a.jsxs)("div", {
                                className: "author-profile",
                                children: [
                                  Object(a.jsxs)("div", {
                                    className: "author-profile-title",
                                    children: [
                                      Object(a.jsx)("img", {
                                        src: "/images/user1.jpg",
                                        className: "shadow-sm",
                                        alt: "image",
                                      }),
                                      Object(a.jsx)("div", {
                                        className:
                                          "author-profile-title-details",
                                        children: Object(a.jsxs)("div", {
                                          className: "author-profile-details",
                                          children: [
                                            Object(a.jsx)("h4", {
                                              children: "Chris Orwig",
                                            }),
                                            Object(a.jsx)("span", {
                                              className: "d-block",
                                              children:
                                                "Photographer, Author, Writer",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  Object(a.jsx)("p", {
                                    children:
                                      "Chris Orwig is a celebrated photographer, author, and writer who brings passion to everything he does.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(a.jsxs)("div", {
                            className: "edemy-post-navigation",
                            children: [
                              Object(a.jsx)("div", {
                                className: "prev-link-wrapper",
                                children: Object(a.jsx)("div", {
                                  className: "info-prev-link-wrapper",
                                  children: Object(a.jsxs)("a", {
                                    href: "#",
                                    children: [
                                      Object(a.jsxs)("span", {
                                        className: "image-prev",
                                        children: [
                                          Object(a.jsx)("img", {
                                            src: "/images/blog/blog11.jpg",
                                            alt: "image",
                                          }),
                                          Object(a.jsx)("span", {
                                            className: "post-nav-title",
                                            children: "Prev",
                                          }),
                                        ],
                                      }),
                                      Object(a.jsxs)("span", {
                                        className: "prev-link-info-wrapper",
                                        children: [
                                          Object(a.jsx)("span", {
                                            className: "prev-title",
                                            children:
                                              "What Is The MLB Summer Slugger Program?",
                                          }),
                                          Object(a.jsx)("span", {
                                            className: "meta-wrapper",
                                            children: Object(a.jsx)("span", {
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
                              Object(a.jsx)("div", {
                                className: "next-link-wrapper",
                                children: Object(a.jsx)("div", {
                                  className: "info-next-link-wrapper",
                                  children: Object(a.jsxs)("a", {
                                    href: "#",
                                    children: [
                                      Object(a.jsxs)("span", {
                                        className: "next-link-info-wrapper",
                                        children: [
                                          Object(a.jsx)("span", {
                                            className: "next-title",
                                            children:
                                              "28 Student-Centered Instructional Strategies",
                                          }),
                                          Object(a.jsx)("span", {
                                            className: "meta-wrapper",
                                            children: Object(a.jsx)("span", {
                                              className: "date-post",
                                              children: "January 19, 2020",
                                            }),
                                          }),
                                        ],
                                      }),
                                      Object(a.jsxs)("span", {
                                        className: "image-next",
                                        children: [
                                          Object(a.jsx)("img", {
                                            src: "/images/blog/blog12.jpg",
                                            alt: "image",
                                          }),
                                          Object(a.jsx)("span", {
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
                          Object(a.jsx)(d.a, {}),
                        ],
                      }),
                    }),
                    Object(a.jsx)("div", {
                      className: "col-lg-4 col-md-12",
                      children: Object(a.jsx)(o.a, {}),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      };
    },
    vNVm: function (e, t, s) {
      "use strict";
      var a = s("zoAU"),
        i = s("AroE");
      (t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            s = e.disabled || !n,
            i = (0, c.useRef)(),
            o = (0, c.useState)(!1),
            d = a(o, 2),
            j = d[0],
            u = d[1],
            b = (0, c.useCallback)(
              function (e) {
                i.current && (i.current(), (i.current = void 0)),
                  s ||
                    j ||
                    (e &&
                      e.tagName &&
                      (i.current = (function (e, t, s) {
                        var a = (function (e) {
                            var t = e.rootMargin || "",
                              s = l.get(t);
                            if (s) return s;
                            var a = new Map(),
                              i = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = a.get(e.target),
                                    s =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && s && t(s);
                                });
                              }, e);
                            return (
                              l.set(
                                t,
                                (s = { id: t, observer: i, elements: a })
                              ),
                              s
                            );
                          })(s),
                          i = a.id,
                          c = a.observer,
                          r = a.elements;
                        return (
                          r.set(e, t),
                          c.observe(e),
                          function () {
                            r.delete(e),
                              c.unobserve(e),
                              0 === r.size && (c.disconnect(), l.delete(i));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && u(e);
                        },
                        { rootMargin: t }
                      )));
              },
              [s, t, j]
            );
          return (
            (0, c.useEffect)(
              function () {
                n ||
                  j ||
                  (0, r.default)(function () {
                    return u(!0);
                  });
              },
              [j]
            ),
            [b, j]
          );
        });
      var c = s("q1tI"),
        r = i(s("0G5g")),
        n = "undefined" !== typeof IntersectionObserver;
      var l = new Map();
    },
  },
  [["BTBd", 1, 0, 2, 12]],
]);
