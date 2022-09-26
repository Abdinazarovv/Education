_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [83],
  {
    Ix5F: function (e, s, c) {
      "use strict";
      var a = c("nKUr"),
        t = (c("q1tI"), c("YFqc")),
        r = c.n(t);
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
                        children: Object(a.jsx)(r.a, {
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
    "NYE/": function (e, s, c) {
      "use strict";
      c.r(s);
      var a = c("nKUr"),
        t = c("q1tI"),
        r = c.n(t),
        l = c("Ix5F"),
        i = c("YFqc"),
        n = c.n(i);
      s.default = function () {
        return Object(a.jsxs)(r.a.Fragment, {
          children: [
            Object(a.jsx)(l.a, {
              pageTitle: "Shop",
              homePageUrl: "/",
              homePageText: "Home",
              activePageText: "Shop",
            }),
            Object(a.jsx)("div", {
              className: "products-area ptb-100",
              children: Object(a.jsxs)("div", {
                className: "container",
                children: [
                  Object(a.jsxs)("div", {
                    className: "edemy-grid-sorting row align-items-center",
                    children: [
                      Object(a.jsx)("div", {
                        className: "col-lg-8 col-md-6 result-count",
                        children: Object(a.jsxs)("p", {
                          children: [
                            "We found ",
                            Object(a.jsx)("span", {
                              className: "count",
                              children: "9",
                            }),
                            " products available for you",
                          ],
                        }),
                      }),
                      Object(a.jsx)("div", {
                        className: "col-lg-4 col-md-6 ordering",
                        children: Object(a.jsx)("div", {
                          className: "select-box",
                          children: Object(a.jsxs)("select", {
                            className: "form-control",
                            children: [
                              Object(a.jsx)("option", { children: "Sort By:" }),
                              Object(a.jsx)("option", {
                                children: "Popularity",
                              }),
                              Object(a.jsx)("option", { children: "Latest" }),
                              Object(a.jsx)("option", {
                                children: "Price: low to high",
                              }),
                              Object(a.jsx)("option", {
                                children: "Price: high to low",
                              }),
                            ],
                          }),
                        }),
                      }),
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
                                Object(a.jsx)(n.a, {
                                  href: "/single-products",
                                  children: Object(a.jsx)("a", {
                                    children: Object(a.jsx)("img", {
                                      src: "/images/products/product1.jpg",
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
                                  children: Object(a.jsx)(n.a, {
                                    href: "/single-products",
                                    children: Object(a.jsx)("a", {
                                      children: "Note Book Mockup",
                                    }),
                                  }),
                                }),
                                Object(a.jsxs)("div", {
                                  className: "price",
                                  children: [
                                    Object(a.jsx)("span", {
                                      className: "old-price",
                                      children: "$321",
                                    }),
                                    Object(a.jsx)("span", {
                                      className: "new-price",
                                      children: "$250",
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
                      Object(a.jsx)("div", {
                        className: "col-lg-4 col-md-6 col-sm-6",
                        children: Object(a.jsxs)("div", {
                          className: "single-products-box",
                          children: [
                            Object(a.jsxs)("div", {
                              className: "products-image",
                              children: [
                                Object(a.jsx)(n.a, {
                                  href: "/single-products",
                                  children: Object(a.jsx)("a", {
                                    children: Object(a.jsx)("img", {
                                      src: "/images/products/product2.jpg",
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
                                  className: "sale-tag",
                                  children: "Sale!",
                                }),
                              ],
                            }),
                            Object(a.jsxs)("div", {
                              className: "products-content",
                              children: [
                                Object(a.jsx)("h3", {
                                  children: Object(a.jsx)(n.a, {
                                    href: "/single-products",
                                    children: Object(a.jsx)("a", {
                                      children: "Motivational Book Cover",
                                    }),
                                  }),
                                }),
                                Object(a.jsxs)("div", {
                                  className: "price",
                                  children: [
                                    Object(a.jsx)("span", {
                                      className: "old-price",
                                      children: "$210",
                                    }),
                                    Object(a.jsx)("span", {
                                      className: "new-price",
                                      children: "$200",
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
                      Object(a.jsx)("div", {
                        className: "col-lg-4 col-md-6 col-sm-6",
                        children: Object(a.jsxs)("div", {
                          className: "single-products-box",
                          children: [
                            Object(a.jsxs)("div", {
                              className: "products-image",
                              children: [
                                Object(a.jsx)(n.a, {
                                  href: "/single-products",
                                  children: Object(a.jsx)("a", {
                                    children: Object(a.jsx)("img", {
                                      src: "/images/products/product3.jpg",
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
                                  children: Object(a.jsx)(n.a, {
                                    href: "/single-products",
                                    children: Object(a.jsx)("a", {
                                      children: "Book Cover Softcover",
                                    }),
                                  }),
                                }),
                                Object(a.jsxs)("div", {
                                  className: "price",
                                  children: [
                                    Object(a.jsx)("span", {
                                      className: "old-price",
                                      children: "$210",
                                    }),
                                    Object(a.jsx)("span", {
                                      className: "new-price",
                                      children: "$200",
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
                      Object(a.jsx)("div", {
                        className: "col-lg-4 col-md-6 col-sm-6",
                        children: Object(a.jsxs)("div", {
                          className: "single-products-box",
                          children: [
                            Object(a.jsxs)("div", {
                              className: "products-image",
                              children: [
                                Object(a.jsx)(n.a, {
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
                                  children: Object(a.jsx)(n.a, {
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
                                Object(a.jsx)(n.a, {
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
                                  children: Object(a.jsx)(n.a, {
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
                                Object(a.jsx)(n.a, {
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
                                  children: Object(a.jsx)(n.a, {
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
                      Object(a.jsx)("div", {
                        className: "col-lg-12 col-md-12 col-sm-12",
                        children: Object(a.jsxs)("div", {
                          className: "pagination-area text-center",
                          children: [
                            Object(a.jsx)("a", {
                              href: "#",
                              className: "prev page-numbers",
                              children: Object(a.jsx)("i", {
                                className: "bx bx-chevrons-left",
                              }),
                            }),
                            Object(a.jsx)("span", {
                              className: "page-numbers current",
                              "aria-current": "page",
                              children: "1",
                            }),
                            Object(a.jsx)("a", {
                              href: "#",
                              className: "page-numbers",
                              children: "2",
                            }),
                            Object(a.jsx)("a", {
                              href: "#",
                              className: "page-numbers",
                              children: "3",
                            }),
                            Object(a.jsx)("a", {
                              href: "#",
                              className: "page-numbers",
                              children: "4",
                            }),
                            Object(a.jsx)("a", {
                              href: "#",
                              className: "next page-numbers",
                              children: Object(a.jsx)("i", {
                                className: "bx bx-chevrons-right",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
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
      var r = t(c("q1tI")),
        l = c("elyg"),
        i = c("nOHt"),
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
          c = (0, i.useRouter)(),
          t = (c && c.pathname) || "/",
          b = r.default.useMemo(
            function () {
              var s = (0, l.resolveHref)(t, e.href, !0),
                c = a(s, 2),
                r = c[0],
                i = c[1];
              return {
                href: r,
                as: e.as ? (0, l.resolveHref)(t, e.as) : i || r,
              };
            },
            [t, e.href, e.as]
          ),
          o = b.href,
          x = b.as,
          h = e.children,
          m = e.replace,
          O = e.shallow,
          u = e.scroll,
          p = e.locale;
        "string" === typeof h && (h = r.default.createElement("a", null, h));
        var N = r.Children.only(h),
          f = N && "object" === typeof N && N.ref,
          g = (0, n.useIntersection)({ rootMargin: "200px" }),
          v = a(g, 2),
          w = v[0],
          y = v[1],
          A = r.default.useCallback(
            function (e) {
              w(e),
                f &&
                  ("function" === typeof f
                    ? f(e)
                    : "object" === typeof f && (f.current = e));
            },
            [f, w]
          );
        (0, r.useEffect)(
          function () {
            var e = y && s && (0, l.isLocalURL)(o),
              a = "undefined" !== typeof p ? p : c && c.locale,
              t = j[o + "%" + x + (a ? "%" + a : "")];
            e && !t && d(c, o, x, { locale: a });
          },
          [x, o, y, p, s, c]
        );
        var E = {
          ref: A,
          onClick: function (e) {
            N.props &&
              "function" === typeof N.props.onClick &&
              N.props.onClick(e),
              e.defaultPrevented ||
                (function (e, s, c, a, t, r, i, n) {
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
                    null == i && (i = a.indexOf("#") < 0),
                    s[t ? "replace" : "push"](c, a, {
                      shallow: r,
                      locale: n,
                      scroll: i,
                    }).then(function (e) {
                      e && i && document.body.focus();
                    }));
                })(e, c, o, x, m, O, u, p);
          },
          onMouseEnter: function (e) {
            (0, l.isLocalURL)(o) &&
              (N.props &&
                "function" === typeof N.props.onMouseEnter &&
                N.props.onMouseEnter(e),
              d(c, o, x, { priority: !0 }));
          },
        };
        if (e.passHref || ("a" === N.type && !("href" in N.props))) {
          var _ = "undefined" !== typeof p ? p : c && c.locale,
            C = (0, l.getDomainLocale)(
              x,
              _,
              c && c.locales,
              c && c.domainLocales
            );
          E.href =
            C ||
            (0, l.addBasePath)((0, l.addLocale)(x, _, c && c.defaultLocale));
        }
        return r.default.cloneElement(N, E);
      };
      s.default = b;
    },
    r4bA: function (e, s, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/products-list-1",
        function () {
          return c("NYE/");
        },
      ]);
    },
    vNVm: function (e, s, c) {
      "use strict";
      var a = c("zoAU"),
        t = c("AroE");
      (s.__esModule = !0),
        (s.useIntersection = function (e) {
          var s = e.rootMargin,
            c = e.disabled || !i,
            t = (0, r.useRef)(),
            j = (0, r.useState)(!1),
            d = a(j, 2),
            b = d[0],
            o = d[1],
            x = (0, r.useCallback)(
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
                          r = a.observer,
                          l = a.elements;
                        return (
                          l.set(e, s),
                          r.observe(e),
                          function () {
                            l.delete(e),
                              r.unobserve(e),
                              0 === l.size && (r.disconnect(), n.delete(t));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && o(e);
                        },
                        { rootMargin: s }
                      )));
              },
              [c, s, b]
            );
          return (
            (0, r.useEffect)(
              function () {
                i ||
                  b ||
                  (0, l.default)(function () {
                    return o(!0);
                  });
              },
              [b]
            ),
            [x, b]
          );
        });
      var r = c("q1tI"),
        l = t(c("0G5g")),
        i = "undefined" !== typeof IntersectionObserver;
      var n = new Map();
    },
  },
  [["r4bA", 1, 0, 2]],
]);
