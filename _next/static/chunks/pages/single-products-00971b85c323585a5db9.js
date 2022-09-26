_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [93],
  {
    "/Zh3": function (e, s, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/single-products",
        function () {
          return c("uH0d");
        },
      ]);
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
    YFqc: function (e, s, c) {
      e.exports = c("cTJO");
    },
    cTJO: function (e, s, c) {
      "use strict";
      var a = c("zoAU"),
        t = c("7KCV");
      (s.__esModule = !0), (s.default = void 0);
      var i = t(c("q1tI")),
        l = c("elyg"),
        r = c("nOHt"),
        n = c("vNVm"),
        j = {};
      function d(e, s, c, a) {
        if (e && (0, l.isLocalURL)(s)) {
          e.prefetch(s, c, a).catch(function (e) {
            0;
          });
          var t =
            a && "undefined" !== typeof a.locale ? a.locale : e && e.locale;
          j[s + "%" + c + (t ? "%" + t : "")] = !0;
        }
      }
      var b = function (e) {
        var s = !1 !== e.prefetch,
          c = (0, r.useRouter)(),
          t = (c && c.pathname) || "/",
          b = i.default.useMemo(
            function () {
              var s = (0, l.resolveHref)(t, e.href, !0),
                c = a(s, 2),
                i = c[0],
                r = c[1];
              return {
                href: i,
                as: e.as ? (0, l.resolveHref)(t, e.as) : r || i,
              };
            },
            [t, e.href, e.as]
          ),
          x = b.href,
          o = b.as,
          m = e.children,
          h = e.replace,
          O = e.shallow,
          u = e.scroll,
          p = e.locale;
        "string" === typeof m && (m = i.default.createElement("a", null, m));
        var N = i.Children.only(m),
          v = N && "object" === typeof N && N.ref,
          g = (0, n.useIntersection)({ rootMargin: "200px" }),
          f = a(g, 2),
          w = f[0],
          y = f[1],
          k = i.default.useCallback(
            function (e) {
              w(e),
                v &&
                  ("function" === typeof v
                    ? v(e)
                    : "object" === typeof v && (v.current = e));
            },
            [v, w]
          );
        (0, i.useEffect)(
          function () {
            var e = y && s && (0, l.isLocalURL)(x),
              a = "undefined" !== typeof p ? p : c && c.locale,
              t = j[x + "%" + o + (a ? "%" + a : "")];
            e && !t && d(c, x, o, { locale: a });
          },
          [o, x, y, p, s, c]
        );
        var T = {
          ref: k,
          onClick: function (e) {
            N.props &&
              "function" === typeof N.props.onClick &&
              N.props.onClick(e),
              e.defaultPrevented ||
                (function (e, s, c, a, t, i, r, n) {
                  ("A" !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var s = e.currentTarget.target;
                      return (
                        (s && "_self" !== s) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      (0, l.isLocalURL)(c))) &&
                    (e.preventDefault(),
                    null == r && (r = a.indexOf("#") < 0),
                    s[t ? "replace" : "push"](c, a, {
                      shallow: i,
                      locale: n,
                      scroll: r,
                    }).then(function (e) {
                      e && r && document.body.focus();
                    }));
                })(e, c, x, o, h, O, u, p);
          },
          onMouseEnter: function (e) {
            (0, l.isLocalURL)(x) &&
              (N.props &&
                "function" === typeof N.props.onMouseEnter &&
                N.props.onMouseEnter(e),
              d(c, x, o, { priority: !0 }));
          },
        };
        if (e.passHref || ("a" === N.type && !("href" in N.props))) {
          var _ = "undefined" !== typeof p ? p : c && c.locale,
            E = (0, l.getDomainLocale)(
              o,
              _,
              c && c.locales,
              c && c.domainLocales
            );
          T.href =
            E ||
            (0, l.addBasePath)((0, l.addLocale)(o, _, c && c.defaultLocale));
        }
        return i.default.cloneElement(N, T);
      };
      s.default = b;
    },
    uH0d: function (e, s, c) {
      "use strict";
      c.r(s);
      var a = c("nKUr"),
        t = c("q1tI"),
        i = c.n(t),
        l = c("Ix5F"),
        r = c("GTV5");
      Object(r.e)();
      var n = function () {
          return Object(a.jsx)("div", {
            className: "products-details-tabs",
            children: Object(a.jsxs)(r.d, {
              children: [
                Object(a.jsxs)(r.b, {
                  children: [
                    Object(a.jsx)(r.a, { children: "Description" }),
                    Object(a.jsx)(r.a, { children: "Reviews (2)" }),
                  ],
                }),
                Object(a.jsxs)(r.c, {
                  children: [
                    Object(a.jsx)("p", {
                      children:
                        "This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Lorem ipsum dolor sit.",
                    }),
                    Object(a.jsxs)("ul", {
                      children: [
                        Object(a.jsx)("li", {
                          children: "Instant eDemy bestseller",
                        }),
                        Object(a.jsx)("li", {
                          children: "Translated into 18 languages",
                        }),
                        Object(a.jsx)("li", {
                          children: "#1 Most Recommended Book of the year.",
                        }),
                        Object(a.jsx)("li", {
                          children:
                            "A neglected project, widely dismissed, its champion written off as unhinged.",
                        }),
                        Object(a.jsx)("li", {
                          children:
                            "Yields a negative result in an experiment because of a flaw in the design of the experiment.",
                        }),
                        Object(a.jsx)("li", {
                          children:
                            "An Amazon, Bloomberg, Financial Times, Forbes, Inc., Newsweek, Strategy + Business, Tech Crunch, Washington Post Best Business Book of the year",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(a.jsxs)(r.c, {
                  children: [
                    Object(a.jsxs)("div", {
                      className: "products-reviews",
                      children: [
                        Object(a.jsx)("h3", { children: "Course Rating" }),
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
                            Object(a.jsx)("span", { className: "bx bxs-star" }),
                          ],
                        }),
                        Object(a.jsx)("div", {
                          className: "rating-count",
                          children: Object(a.jsx)("span", {
                            children: "4.1 average based on 4 reviews.",
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
                      className: "products-review-comments",
                      children: [
                        Object(a.jsx)("h3", { children: "3 Reviews" }),
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
                                      className: "bx bxs-star checked",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star checked",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star checked",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star checked",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star checked",
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
                                      className: "bx bxs-star checked",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star checked",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star checked",
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
                                      className: "bx bxs-star checked",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star checked",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star checked",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star checked",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star checked",
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
                                      className: "bx bxs-star checked",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star checked",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star checked",
                                    }),
                                    Object(a.jsx)("i", {
                                      className: "bx bxs-star checked",
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
                    Object(a.jsxs)("div", {
                      className: "review-form-wrapper",
                      children: [
                        Object(a.jsx)("h3", { children: "Add a review" }),
                        Object(a.jsxs)("p", {
                          className: "comment-notes",
                          children: [
                            "Your email address will not be published. Required fields are marked ",
                            Object(a.jsx)("span", { children: "*" }),
                          ],
                        }),
                        Object(a.jsx)("form", {
                          children: Object(a.jsxs)("div", {
                            className: "row",
                            children: [
                              Object(a.jsx)("div", {
                                className: "col-lg-12 col-md-12",
                                children: Object(a.jsxs)("div", {
                                  className: "rating",
                                  children: [
                                    Object(a.jsx)("input", {
                                      type: "radio",
                                      id: "star5",
                                      name: "rating",
                                      value: "5",
                                    }),
                                    Object(a.jsx)("label", {
                                      htmlFor: "star5",
                                    }),
                                    Object(a.jsx)("input", {
                                      type: "radio",
                                      id: "star4",
                                      name: "rating",
                                      value: "4",
                                    }),
                                    Object(a.jsx)("label", {
                                      htmlFor: "star4",
                                    }),
                                    Object(a.jsx)("input", {
                                      type: "radio",
                                      id: "star3",
                                      name: "rating",
                                      value: "3",
                                    }),
                                    Object(a.jsx)("label", {
                                      htmlFor: "star3",
                                    }),
                                    Object(a.jsx)("input", {
                                      type: "radio",
                                      id: "star2",
                                      name: "rating",
                                      value: "2",
                                    }),
                                    Object(a.jsx)("label", {
                                      htmlFor: "star2",
                                    }),
                                    Object(a.jsx)("input", {
                                      type: "radio",
                                      id: "star1",
                                      name: "rating",
                                      value: "1",
                                    }),
                                    Object(a.jsx)("label", {
                                      htmlFor: "star1",
                                    }),
                                  ],
                                }),
                              }),
                              Object(a.jsx)("div", {
                                className: "col-lg-6 col-md-6",
                                children: Object(a.jsx)("div", {
                                  className: "form-group",
                                  children: Object(a.jsx)("input", {
                                    type: "text",
                                    className: "form-control",
                                    placeholder: "Name *",
                                  }),
                                }),
                              }),
                              Object(a.jsx)("div", {
                                className: "col-lg-6 col-md-6",
                                children: Object(a.jsx)("div", {
                                  className: "form-group",
                                  children: Object(a.jsx)("input", {
                                    type: "email",
                                    className: "form-control",
                                    placeholder: "Email *",
                                  }),
                                }),
                              }),
                              Object(a.jsx)("div", {
                                className: "col-lg-12 col-md-12",
                                children: Object(a.jsx)("div", {
                                  className: "form-group",
                                  children: Object(a.jsx)("textarea", {
                                    placeholder: "Your review",
                                    className: "form-control",
                                    cols: "30",
                                    rows: "6",
                                  }),
                                }),
                              }),
                              Object(a.jsx)("div", {
                                className: "col-lg-12 col-md-12",
                                children: Object(a.jsxs)("p", {
                                  className: "comment-form-cookies-consent",
                                  children: [
                                    Object(a.jsx)("input", {
                                      type: "checkbox",
                                      id: "test1",
                                    }),
                                    Object(a.jsx)("label", {
                                      htmlFor: "test1",
                                      children:
                                        "Save my name, email, and website in this browser for the next time I comment.",
                                    }),
                                  ],
                                }),
                              }),
                              Object(a.jsx)("div", {
                                className: "col-lg-12 col-md-12",
                                children: Object(a.jsx)("button", {
                                  type: "submit",
                                  children: "Submit",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        j = c("YFqc"),
        d = c.n(j),
        b = function () {
          return Object(a.jsx)("div", {
            className: "products-area pt-100 pb-70 bg-f5f1ed",
            children: Object(a.jsxs)("div", {
              className: "container",
              children: [
                Object(a.jsxs)("div", {
                  className: "section-title",
                  children: [
                    Object(a.jsx)("span", {
                      className: "sub-title",
                      children: "Our Shop",
                    }),
                    Object(a.jsx)("h2", { children: "Related Products" }),
                  ],
                }),
                Object(a.jsxs)("div", {
                  className: "row",
                  children: [
                    Object(a.jsx)("div", {
                      className: "col-lg-4 col-md-6 col-sm-6",
                      children: Object(a.jsxs)("div", {
                        className: "single-products-box",
                        children: [
                          Object(a.jsxs)("div", {
                            className: "products-image",
                            children: [
                              Object(a.jsx)(d.a, {
                                href: "/single-products",
                                children: Object(a.jsx)("a", {
                                  children: Object(a.jsx)("img", {
                                    src: "/images/products/product4.jpg",
                                    className: "main-image",
                                    alt: "image",
                                  }),
                                }),
                              }),
                              Object(a.jsx)("div", {
                                className: "products-button",
                                children: Object(a.jsx)("ul", {
                                  children: Object(a.jsx)("li", {
                                    children: Object(a.jsx)("div", {
                                      className: "wishlist-btn",
                                      children: Object(a.jsxs)("a", {
                                        href: "#",
                                        children: [
                                          Object(a.jsx)("i", {
                                            className: "bx bx-heart",
                                          }),
                                          Object(a.jsx)("span", {
                                            className: "tooltip-label",
                                            children: "Add to Wishlist",
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          Object(a.jsxs)("div", {
                            className: "products-content",
                            children: [
                              Object(a.jsx)("h3", {
                                children: Object(a.jsx)(d.a, {
                                  href: "/single-products",
                                  children: Object(a.jsx)("a", {
                                    children: "Stop and Take a Second",
                                  }),
                                }),
                              }),
                              Object(a.jsx)("div", {
                                className: "price",
                                children: Object(a.jsx)("span", {
                                  className: "new-price",
                                  children: "$150",
                                }),
                              }),
                              Object(a.jsxs)("div", {
                                className: "star-rating",
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
                                ],
                              }),
                              Object(a.jsx)("a", {
                                href: "#",
                                className: "add-to-cart",
                                children: "Add to Cart",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(a.jsx)("div", {
                      className: "col-lg-4 col-md-6 col-sm-6",
                      children: Object(a.jsxs)("div", {
                        className: "single-products-box",
                        children: [
                          Object(a.jsxs)("div", {
                            className: "products-image",
                            children: [
                              Object(a.jsx)(d.a, {
                                href: "/single-products",
                                children: Object(a.jsx)("a", {
                                  children: Object(a.jsx)("img", {
                                    src: "/images/products/product5.jpg",
                                    className: "main-image",
                                    alt: "image",
                                  }),
                                }),
                              }),
                              Object(a.jsx)("div", {
                                className: "products-button",
                                children: Object(a.jsx)("ul", {
                                  children: Object(a.jsx)("li", {
                                    children: Object(a.jsx)("div", {
                                      className: "wishlist-btn",
                                      children: Object(a.jsxs)("a", {
                                        href: "#",
                                        children: [
                                          Object(a.jsx)("i", {
                                            className: "bx bx-heart",
                                          }),
                                          Object(a.jsx)("span", {
                                            className: "tooltip-label",
                                            children: "Add to Wishlist",
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          Object(a.jsxs)("div", {
                            className: "products-content",
                            children: [
                              Object(a.jsx)("h3", {
                                children: Object(a.jsx)(d.a, {
                                  href: "/single-products",
                                  children: Object(a.jsx)("a", {
                                    children: "Real Life Fairytale",
                                  }),
                                }),
                              }),
                              Object(a.jsx)("div", {
                                className: "price",
                                children: Object(a.jsx)("span", {
                                  className: "new-price",
                                  children: "$240",
                                }),
                              }),
                              Object(a.jsxs)("div", {
                                className: "star-rating",
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
                                ],
                              }),
                              Object(a.jsx)("a", {
                                href: "#",
                                className: "add-to-cart",
                                children: "Add to Cart",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(a.jsx)("div", {
                      className: "col-lg-4 col-md-6 col-sm-6",
                      children: Object(a.jsxs)("div", {
                        className: "single-products-box",
                        children: [
                          Object(a.jsxs)("div", {
                            className: "products-image",
                            children: [
                              Object(a.jsx)(d.a, {
                                href: "/single-products",
                                children: Object(a.jsx)("a", {
                                  children: Object(a.jsx)("img", {
                                    src: "/images/products/product6.jpg",
                                    className: "main-image",
                                    alt: "image",
                                  }),
                                }),
                              }),
                              Object(a.jsx)("div", {
                                className: "products-button",
                                children: Object(a.jsx)("ul", {
                                  children: Object(a.jsx)("li", {
                                    children: Object(a.jsx)("div", {
                                      className: "wishlist-btn",
                                      children: Object(a.jsxs)("a", {
                                        href: "#",
                                        children: [
                                          Object(a.jsx)("i", {
                                            className: "bx bx-heart",
                                          }),
                                          Object(a.jsx)("span", {
                                            className: "tooltip-label",
                                            children: "Add to Wishlist",
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              Object(a.jsx)("div", {
                                className: "new-tag",
                                children: "New!",
                              }),
                            ],
                          }),
                          Object(a.jsxs)("div", {
                            className: "products-content",
                            children: [
                              Object(a.jsx)("h3", {
                                children: Object(a.jsx)(d.a, {
                                  href: "/single-products",
                                  children: Object(a.jsx)("a", {
                                    children: "Running From Me",
                                  }),
                                }),
                              }),
                              Object(a.jsxs)("div", {
                                className: "price",
                                children: [
                                  Object(a.jsx)("span", {
                                    className: "old-price",
                                    children: "$150",
                                  }),
                                  Object(a.jsx)("span", {
                                    className: "new-price",
                                    children: "$100",
                                  }),
                                ],
                              }),
                              Object(a.jsxs)("div", {
                                className: "star-rating",
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
                                ],
                              }),
                              Object(a.jsx)("a", {
                                href: "#",
                                className: "add-to-cart",
                                children: "Add to Cart",
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
      s.default = function () {
        return Object(a.jsxs)(i.a.Fragment, {
          children: [
            Object(a.jsx)(l.a, {
              pageTitle: "Products Details",
              homePageUrl: "/",
              homePageText: "Home",
              activePageText: "Products Details",
            }),
            Object(a.jsx)("div", {
              className: "products-details-area ptb-100",
              children: Object(a.jsx)("div", {
                className: "container",
                children: Object(a.jsxs)("div", {
                  className: "row align-items-center",
                  children: [
                    Object(a.jsx)("div", {
                      className: "col-lg-5 col-md-12",
                      children: Object(a.jsx)("div", {
                        className: "products-details-image",
                        children: Object(a.jsx)("a", {
                          href: "/images/products/product2.jpg",
                          className: "popup-btn",
                          children: Object(a.jsx)("img", {
                            src: "/images/products/product2.jpg",
                            alt: "image",
                          }),
                        }),
                      }),
                    }),
                    Object(a.jsx)("div", {
                      className: "col-lg-7 col-md-12",
                      children: Object(a.jsxs)("div", {
                        className: "products-details-desc",
                        children: [
                          Object(a.jsx)("h3", {
                            children: "Motivational Book Cover",
                          }),
                          Object(a.jsxs)("div", {
                            className: "price",
                            children: [
                              Object(a.jsx)("span", {
                                className: "new-price",
                                children: "$200",
                              }),
                              Object(a.jsx)("span", {
                                className: "old-price",
                                children: "$210",
                              }),
                            ],
                          }),
                          Object(a.jsxs)("div", {
                            className: "products-review",
                            children: [
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
                                    className: "bx bxs-star-half",
                                  }),
                                ],
                              }),
                              Object(a.jsx)("a", {
                                href: "#",
                                className: "rating-count",
                                children: "3 reviews",
                              }),
                            ],
                          }),
                          Object(a.jsx)("p", {
                            children:
                              "This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et.",
                          }),
                          Object(a.jsxs)("div", {
                            className: "products-meta",
                            children: [
                              Object(a.jsxs)("span", {
                                children: [
                                  "SKU: ",
                                  Object(a.jsx)("span", {
                                    className: "sku",
                                    children: "10",
                                  }),
                                ],
                              }),
                              Object(a.jsxs)("span", {
                                children: [
                                  "Availability: ",
                                  Object(a.jsx)("span", {
                                    className: "in-stock",
                                    children: "In Stock",
                                  }),
                                ],
                              }),
                              Object(a.jsxs)("span", {
                                children: [
                                  "Category: ",
                                  Object(a.jsx)("a", {
                                    href: "#",
                                    children: "Business",
                                  }),
                                ],
                              }),
                              Object(a.jsxs)("span", {
                                children: [
                                  "Tag: ",
                                  Object(a.jsx)("a", {
                                    href: "#",
                                    children: "Book",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(a.jsxs)("div", {
                            className: "products-add-to-cart",
                            children: [
                              Object(a.jsxs)("div", {
                                className: "input-counter",
                                children: [
                                  Object(a.jsx)("span", {
                                    className: "minus-btn",
                                    children: Object(a.jsx)("i", {
                                      className: "bx bx-minus",
                                    }),
                                  }),
                                  Object(a.jsx)("input", {
                                    type: "text",
                                    min: "1",
                                    defaultValue: "1",
                                  }),
                                  Object(a.jsx)("span", {
                                    className: "plus-btn",
                                    children: Object(a.jsx)("i", {
                                      className: "bx bx-plus",
                                    }),
                                  }),
                                ],
                              }),
                              Object(a.jsxs)("button", {
                                type: "submit",
                                className: "default-btn",
                                children: [
                                  Object(a.jsx)("i", {
                                    className: "flaticon-user",
                                  }),
                                  " Add to Cart ",
                                  Object(a.jsx)("span", {}),
                                ],
                              }),
                            ],
                          }),
                          Object(a.jsx)("div", {
                            className: "products-share",
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
                    }),
                    Object(a.jsx)("div", {
                      className: "col-lg-12 col-md-12",
                      children: Object(a.jsx)(n, {}),
                    }),
                  ],
                }),
              }),
            }),
            Object(a.jsx)(b, {}),
          ],
        });
      };
    },
    vNVm: function (e, s, c) {
      "use strict";
      var a = c("zoAU"),
        t = c("AroE");
      (s.__esModule = !0),
        (s.useIntersection = function (e) {
          var s = e.rootMargin,
            c = e.disabled || !r,
            t = (0, i.useRef)(),
            j = (0, i.useState)(!1),
            d = a(j, 2),
            b = d[0],
            x = d[1],
            o = (0, i.useCallback)(
              function (e) {
                t.current && (t.current(), (t.current = void 0)),
                  c ||
                    b ||
                    (e &&
                      e.tagName &&
                      (t.current = (function (e, s, c) {
                        var a = (function (e) {
                            var s = e.rootMargin || "",
                              c = n.get(s);
                            if (c) return c;
                            var a = new Map(),
                              t = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var s = a.get(e.target),
                                    c =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  s && c && s(c);
                                });
                              }, e);
                            return (
                              n.set(
                                s,
                                (c = { id: s, observer: t, elements: a })
                              ),
                              c
                            );
                          })(c),
                          t = a.id,
                          i = a.observer,
                          l = a.elements;
                        return (
                          l.set(e, s),
                          i.observe(e),
                          function () {
                            l.delete(e),
                              i.unobserve(e),
                              0 === l.size && (i.disconnect(), n.delete(t));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && x(e);
                        },
                        { rootMargin: s }
                      )));
              },
              [c, s, b]
            );
          return (
            (0, i.useEffect)(
              function () {
                r ||
                  b ||
                  (0, l.default)(function () {
                    return x(!0);
                  });
              },
              [b]
            ),
            [o, b]
          );
        });
      var i = c("q1tI"),
        l = t(c("0G5g")),
        r = "undefined" !== typeof IntersectionObserver;
      var n = new Map();
    },
  },
  [["/Zh3", 1, 0, 2, 10]],
]);
